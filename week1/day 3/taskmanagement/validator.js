// validator.js

export function validateTitle(title) {
  if (!title || title.trim().length < 3) {
    return "Title is not valid";
  }
  return "valid";
}

export function validatePriority(priority) {
  if (priority !== "low" && priority !== "medium" && priority !== "high") {
    return "Priority is not valid";
  }
  return "valid";
}

export function validateDueDate(date) {
  var input = new Date(date);
  var today = new Date();

  if (input <= today) {
    return "Date must be future";
  }

  return "valid";
}