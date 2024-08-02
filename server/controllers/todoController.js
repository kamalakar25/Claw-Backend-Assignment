const Todo = require('../models/Todo');

exports.createTodo = async (req, res) => {
  const { title, description } = req.body;
  const newTodo = new Todo({
    userId: req.user.id,
    title,
    description,
  });

  try {
    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ userId: req.user.id });
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, description, status } = req.body;

  try {
    const todo = await Todo.findById(id);
    if (!todo) return res.status(404).json({ error: 'Todo not found' });

    if (todo.userId.toString() !== req.user.id)
      return res.status(403).json({ error: 'Unauthorized' });

    todo.title = title || todo.title;
    todo.description = description || todo.description;
    todo.status = status || todo.status;

    const updatedTodo = await todo.save();
    res.status(200).json(updatedTodo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteTodo = async (req, res) => {
  const { id } = req.params;

  try {
    const todo = await Todo.findById(id);
    if (!todo) return res.status(404).json({ error: 'Todo not found' });

    if (todo.userId.toString() !== req.user.id)
      return res.status(403).json({ error: 'Unauthorized' });

    Todo.findByIdAndDelete(id)
    res.status(200).json({ message: 'Todo deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
