import { addTask, getAllTasks, completeTask } from "./task.js";

// 1. Add some tasks
console.log(addTask("Learn NodeJS", "high", "2026-04-10"));
console.log(addTask("Go to Gym", "medium", "2026-03-20"));
console.log(addTask("Hi", "low", "2026-03-20")); 

// 2. Display all tasks
console.log("\nAll Tasks:");
console.log(getAllTasks());

// 3. Complete a task
console.log("\nCompleting Task 1...");
console.log(completeTask(1));

// 4. Display updated tasks
console.log("\nUpdated Tasks:");
console.log(getAllTasks());