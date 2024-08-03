// // import React, { useState } from 'react';
// // import Task from './Task';
// // import TaskForm from './TaskForm';
// // import './TaskList.css';

// // const TaskList = ({ tasks, onUpdateTask }) => {
// //   const [search, setSearch] = useState('');
// //   const [editTask, setEditTask] = useState(null);

// //   const handleToggle = (id) => {
// //     onUpdateTask(id, { expanded: !tasks.find(task => task.id === id).expanded });
// //   };

// //   const handleEdit = (id) => {
// //     const task = tasks.find(task => task.id === id);
// //     setEditTask(task);
// //   };

// //   const handleMarkDone = (id) => {
// //     const task = tasks.find(task => task.id === id);
// //     onUpdateTask(id, { completed: !task.completed });
// //   };

// //   const handleSearch = (e) => {
// //     setSearch(e.target.value);
// //   };

// //   const filteredTasks = tasks.filter(task => task.title.toLowerCase().includes(search.toLowerCase()));

// //   return (
// //     <div>
// //       <input
// //         type="text"
// //         placeholder="Search tasks"
// //         value={search}
// //         onChange={handleSearch}
// //         className="search-input"
// //       />
// //       <TaskForm task={editTask} onSave={(task) => {
// //         onUpdateTask(task.id, task);
// //         setEditTask(null);
// //       }} />
// //       {filteredTasks.map(task => (
// //         <Task
// //           key={task.id}
// //           task={task}
// //           onToggle={handleToggle}
// //           onEdit={handleEdit}
// //           onMarkDone={handleMarkDone}
// //         />
// //       ))}
// //     </div>
// //   );
// // };

// // export default TaskList;


 

// import React, { useState } from 'react';
// import Task from './Task';
// import TaskForm from './TaskForm';
// import './TaskList.css';

// const TaskList = ({ tasks, onUpdateTask }) => {
//   const [editTask, setEditTask] = useState(null);

//   const handleToggle = (id) => {
//     onUpdateTask(prevTasks => {
//       const task = prevTasks.find(t => t.id === id);
//       return prevTasks.map(t => (t.id === id ? { ...t, expanded: !task.expanded } : t));
//     });
//   };

//   const handleEdit = (id) => {
//     const task = tasks.find(t => t.id === id);
//     setEditTask(task);
//   };

//   const handleMarkDone = (id) => {
//     onUpdateTask(prevTasks => {
//       const task = prevTasks.find(t => t.id === id);
//       return prevTasks.map(t => (t.id === id ? { ...t, completed: !task.completed } : t));
//     });
//   };

//   return (
//     <div>
//       <TaskForm task={editTask} onSave={(task) => {
//         onUpdateTask(task);
//         setEditTask(null);
//       }} />
//       {tasks.map(task => (
//         <Task
//           key={task.id}
//           task={task}
//           onToggle={handleToggle}
//           onEdit={handleEdit}
//           onMarkDone={handleMarkDone}
//         />
//       ))}
//     </div>
//   );
// };

// export default TaskList;


 
// import React, { useState } from 'react';
// import Task from './Task';
// import TaskForm from './TaskForm';
// import './TaskList.css';

// const TaskList = ({ tasks, onUpdateTask }) => {
//   const [editTask, setEditTask] = useState(null);

//   const handleToggle = (id) => {
//     const updatedTask = tasks.find(task => task.id === id);
//     onUpdateTask({ ...updatedTask, expanded: !updatedTask.expanded });
//   };

//   const handleEdit = (id) => {
//     const task = tasks.find(task => task.id === id);
//     setEditTask(task);
//   };

//   const handleMarkDone = (id) => {
//     const updatedTask = tasks.find(task => task.id === id);
//     onUpdateTask({ ...updatedTask, completed: !updatedTask.completed });
//   };

//   const handleSave = (task) => {
//     onUpdateTask(task);
//     setEditTask(null);
//   };

//   return (
//     <div>
//       <TaskForm task={editTask} onSave={handleSave} />
//       {tasks.map(task => (
//         <Task
//           key={task.id}
//           task={task}
//           onToggle={handleToggle}
//           onEdit={handleEdit}
//           onMarkDone={handleMarkDone}
//         />
//       ))}
//     </div>
//   );
// };

// export default TaskList;





// import React, { useState } from 'react';
// import Task from '../Task/Task';
// import TaskForm from '../TaskForm/TaskForm';
// import './TaskList.css';

// const TaskList = ({ tasks, onUpdateTask }) => {
//   const [editTask, setEditTask] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleToggle = (id) => {
//     const updatedTask = tasks.find(task => task.id === id);
//     onUpdateTask({ ...updatedTask, expanded: !updatedTask.expanded });
//   };

//   const handleEdit = (id) => {
//     const task = tasks.find(task => task.id === id);
//     setEditTask(task);
//   };

//   const handleMarkDone = (id) => {
//     const updatedTask = tasks.find(task => task.id === id);
//     onUpdateTask({ ...updatedTask, completed: !updatedTask.completed });
//   };

//   const handleSave = (task) => {
//     onUpdateTask(task);
//     setEditTask(null);
//   };

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const filteredTasks = tasks.filter(task => 
//     task.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
//     task.description.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div>
//       <input 
//         type="text" 
//         className="search-input" 
//         placeholder="Search tasks" 
//         value={searchTerm} 
//         onChange={handleSearch} 
//       />
//       <TaskForm task={editTask} onSave={handleSave} />
//       {filteredTasks.map(task => (
//         <Task
//           key={task.id}
//           task={task}
//           onToggle={handleToggle}
//           onEdit={handleEdit}
//           onMarkDone={handleMarkDone}
//         />
//       ))}
//     </div>
//   );
// };

// export default TaskList;



 
import React, { useState } from 'react';
import Task from '../Task/Task'; 
import TaskForm from '../TaskForm/TaskForm';  
import './TaskList.css';  

// Define the TaskList component
const TaskList = ({ tasks, onUpdateTask }) => {
  // Declare state variables for editing a task and search term
  const [editTask, setEditTask] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Handling toggling the expanded state of a task
  const handleToggle = (id) => {
    const updatedTask = tasks.find(task => task.id === id);
    onUpdateTask({ ...updatedTask, expanded: !updatedTask.expanded });
  };

  // Handling setting a task for editing
  const handleEdit = (id) => {
    const task = tasks.find(task => task.id === id);
    setEditTask(task);
  };

  // Handling marking a task as done or undoing it
  const handleMarkDone = (id) => {
    const updatedTask = tasks.find(task => task.id === id);
    onUpdateTask({ ...updatedTask, completed: !updatedTask.completed });
  };

  // Handling saving a task (either new or edited)
  const handleSave = (task) => {
    onUpdateTask(task);
    setEditTask(null); // Clear the editTask state
  };

  // Handling search input changes
  const handleSearch = (e) => {
    setSearchTerm(e.target.value); // Update searchTerm state
  };

  // Filter tasks based on the search term
  const filteredTasks = tasks.filter(task => 
    task.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    task.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

 
  return (
    <div>
      <input 
        type="text" 
        className="search-input" 
        placeholder="Search tasks" // Placeholder text for search input
        value={searchTerm} // Bind searchTerm state to input value
        onChange={handleSearch} // Update searchTerm state on input change
      />
      <TaskForm task={editTask} onSave={handleSave} /> {/* Render TaskForm for adding/editing tasks */} 
      {filteredTasks.map(task => (
        <Task
          key={task.id} // Unique key for each task
          task={task} // Pass task data to Task component
          onToggle={handleToggle} // Pass handleToggle function to Task component
          onEdit={handleEdit} // Pass handleEdit function to Task component
          onMarkDone={handleMarkDone} // Pass handleMarkDone function to Task component
        />
      ))}
    </div>
  );
};

 
export default TaskList;
