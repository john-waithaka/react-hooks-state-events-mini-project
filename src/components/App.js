// import React from "react";
// import CategoryFilter from "./CategoryFilter";
// import NewTaskForm from "./NewTaskForm";
// import TaskList from "./TaskList";

// import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

// function App() {
//   return (
//     <div className="App">
//       <h2>My tasks</h2>
//       <CategoryFilter />
//       <NewTaskForm />
//       <TaskList />
//     </div>
//   );
// }

// export default App;


//Blackbox
// App.js
// import React, { useState } from "react";
// import CategoryFilter from "./CategoryFilter";
// import NewTaskForm from "./NewTaskForm";
// import TaskList from "./TaskList";
// import { CATEGORIES, TASKS } from "../data";

// function App() {
//   const [tasks, setTasks] = useState(TASKS);
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const handleTaskFormSubmit = (newTask) => {
//     setTasks([...tasks, newTask]);
//   };

//   const handleCategoryFilterClick = (category) => {
//     setSelectedCategory(category);
//   };

//   return (
//     <div className="App">
//       <h2>My tasks</h2>
//       <CategoryFilter
//         categories={CATEGORIES}
//         selectedCategory={selectedCategory}
//         onCategoryFilterClick={handleCategoryFilterClick}
//       />
//       <NewTaskForm
//         categories={CATEGORIES}
//         onTaskFormSubmit={handleTaskFormSubmit}
//       />
//       <TaskList tasks={tasks} selectedCategory={selectedCategory} />
//     </div>
//   );
// }

// export default App;

//chatgpt
// import React, { useState } from "react";
// import CategoryFilter from "./CategoryFilter";
// import NewTaskForm from "./NewTaskForm";
// import TaskList from "./TaskList";
// import { CATEGORIES, TASKS } from "../data";

// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

// function App() {
//   const [tasks, setTasks] = useState(TASKS);
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   function handleAddTask(newTask) {
//     setTasks([...tasks, newTask]);
//   }

//   function handleDeleteTask(taskText) {
//     setTasks(tasks.filter(task => task.text !== taskText));
//   }

//   const filteredTasks = selectedCategory === "All"
//     ? tasks
//     : tasks.filter(task => task.category === selectedCategory);

//   return (
//     <div className="App">
//       <h2>My tasks</h2>
//       <CategoryFilter 
//         categories={CATEGORIES} 
//         selectedCategory={selectedCategory}
//         setSelectedCategory={setSelectedCategory}
//       />
//       <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAddTask} />
//       <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask} />
//     </div>
//   );
// }

// export default App;


//new code
import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [filteredCategory, setFilteredCategory] = useState("All");

  function handleTaskFormSubmit(newTask) {
    setTasks([...tasks, newTask]);
  }

  function handleDeleteTask(taskText) {
    setTasks(tasks.filter(task => task.text !== taskText));
  }

  function handleCategoryChange(category) {
    setFilteredCategory(category);
  }

  const tasksToDisplay = tasks.filter(
    task => filteredCategory === "All" || task.category === filteredCategory
  );

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onCategoryChange={handleCategoryChange} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
      <TaskList tasks={tasksToDisplay} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
