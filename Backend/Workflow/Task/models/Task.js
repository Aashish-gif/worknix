const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  assignee: { type: String, required: true },
  priority: { type: String, enum: ['Low', 'Medium', 'High', 'Urgent'], required: true },
  dueDate: { type: Date, required: true },
  status: { type: String, enum: ['Todo', 'In Progress', 'Review', 'Completed'], default: 'Todo' }
});

module.exports = mongoose.model('Task', TaskSchema);
