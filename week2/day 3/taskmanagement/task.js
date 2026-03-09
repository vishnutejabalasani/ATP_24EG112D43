// task.js

import { validateTitle, validatePriority, validateDueDate } from "./validator.js";

var tasks = [];
var idCounter = 1;

export function addTask(title, priority, dueDate) {

  var titleCheck = validateTitle(title);
  if (titleCheck !== "valid") {
    return titleCheck;
  }

  var priorityCheck = validatePriority(priority);
  if (priorityCheck !== "valid") {
    return priorityCheck;
  }

  var dateCheck = validateDueDate(dueDate);
  if (dateCheck !== "valid") {
    return dateCheck;
  }

  var newTask = {
    id: idCounter++,
    title: title,
    priority: priority,
    dueDate: dueDate,
    completed: false
  };

  tasks.push(newTask);

  return "Task added successfully";
}

export function getAllTasks() {
  return tasks;
}

export function completeTask(id) {
  for (var i = 0; i < tasks.length; i++) {
    if (tasks[i].id === id) {
      tasks[i].completed = true;
      return "Task completed";
    }
  }

  return "Task not found";
}