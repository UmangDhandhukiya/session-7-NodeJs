const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/todo")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

let todoSchema = new mongoose.Schema({
  item: String,
});

let Todo = mongoose.model("Todo", todoSchema, "todoTask");

const urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function (app) {
  app.get("/todo", async (req, res) => {
    try {
      const data = await Todo.find({});
      res.render("todo", { todos: data });
    } catch (err) {
      throw err;
    }
  });

  app.post("/todo", urlencodedParser, async (req, res) => {
    try {
      const data = await new Todo(req.body).save();
      res.json(data);
    } catch (err) {
      throw err;
    }
  });

  app.delete("/todo/:item", async (req, res) => {
    try {
      const data = await Todo.deleteOne({ item: req.params.item.replace(/\-/g, " ") });
      res.json(data);
    } catch (err) {
      throw err;
    }
  });
};
