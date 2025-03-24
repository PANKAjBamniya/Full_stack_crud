const Todo = require("../model/todoModel");

const getTodos = async (req, res) => {
  // res.send("all Todos Here...");
  const todos = await Todo.find();

  if (todos) {
    res.status(200).json(todos);
  } else {
    res.status(404).json({ message: "No todos found" });
  }
};

const getTodo = async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  if (todo) {
    res.status(200).json(todo);
  } else {
    res.status(404).json({ message: "No todos found" });
  }
};

const addTodos = async (req, res) => {
  // console.log(req.body);

  const { title, description } = req.body;

  if (!title || !description) {
    res.status(400).json({
      message: "Please fill All Details !",
    });
  }

  const newTodo = await Todo.create({ title, description });

  if (newTodo) {
    res.status(201).json(newTodo);
  } else {
    res.status(500).json({
      msg: "Todo not Created ",
    });
  }
};

const updateTodo = async (req, res) => {
  const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (updatedTodo) {
    res.status(200).json(updatedTodo);
  } else {
    res.status(500).json({
      msg: "Todo not Updated ",
    });
  }
};

const removeTodo = async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);

  res.json({
    message: "Todo Deleted Successfully",
  });
};

module.exports = {
  getTodos,
  getTodo,
  addTodos,
  updateTodo,
  removeTodo,
};
