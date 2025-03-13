const express = require("express");
const {
  getTodos,
  addTodos,
  getTodo,
  updateTodo,
  removeTodo,
} = require("../controller/todoController");

const router = express.Router();

router.get("/", getTodos);

router.post("/", addTodos);

router.get("/:id", getTodo);

router.put("/:id", updateTodo);

router.delete("/:id", removeTodo);

module.exports = router;
