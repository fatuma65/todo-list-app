import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() =>{
    const savedTasks = localStorage.getItem('tasks')
    return savedTasks ? JSON.parse(savedTasks) : []
  });

  const addTasks = async (taskItem) => {
    const id = uuidv4();
    // create a new task, give it a unique id and set the completed or checkbox false
    const newTask = { id, text: taskItem, completed: false };
    // create an array to hold the new tasks
    
    // check whether we have any tasks in the local storage
    const tasksAlreadyInLocalStorage = localStorage.getItem("tasks");

    // check if we have items in the local storage
    if (tasksAlreadyInLocalStorage) {
      const parsedTaksInTheStorage = JSON.parse(tasksAlreadyInLocalStorage)
      const taskArray = [newTask, ...parsedTaksInTheStorage]
      setTasks(taskArray)
      const updateStorage = JSON.stringify(taskArray)
      localStorage.setItem('tasks', updateStorage)
    }
    else {
      return []
    }
    // if so, we are going to parse them or make them into thier original format as an array
    // push new task into the into new array 
    // stringify the taskArray, save it into local storage.

  };
  const tasksInLocalStorage = localStorage.getItem("tasks");
  // const parseTasks = tasksInLocalStorage
  const parseTasks = JSON.parse(tasksInLocalStorage);

  const deleteTask = (id) => {

    // return a new array without including the id which was removed.
    let deletedTask = parseTasks.filter((task) => task.id !== id);

    // Update the tasks state with the filtered array
    setTasks(deletedTask);

    // Update the local storage with the correct array where inwhich the id has been removed.
    localStorage.setItem("tasks", JSON.stringify(deletedTask));
  };

  const editTask = (id, updatedTask) => {

    const editATask = tasks.map((task) =>
      task.id === id ? { ...task, text: updatedTask } : task
    );

    setTasks(editATask);

    localStorage.setItem("tasks", JSON.stringify(editATask));
  };

  const markAsCompleted = (id) => {
    // create a new array
    const updateTasks = [];
    // loop through the tasks array
    for (let i = 0; i < tasks.length; i++) {
      // check if tasks array exists and the specific element to check
      // Check if the current task is undefined or if it doesn't have the id property
      if (tasks[i] === undefined || !tasks[i].id) {
        console.log("Task doesnot exist!");
      }
      // check whether the task it is the same as the id we have chosen
      if (tasks[i].id === id) {
        // mark it as completed.
        tasks[i].completed = !tasks[i].completed;
      }
      // add it to the new array generated
      updateTasks.push(tasks[i]);
    }
    // updated the state of the tasks with the new array gotten
    setTasks(updateTasks);
    // stringify the new array generated
    const stringifyNewArray = JSON.stringify(updateTasks);
    // save it to local storage
    localStorage.setItem("tasks", stringifyNewArray);

  };

  return (
    <TodoContext.Provider
      value={{
        tasks,
        addTasks,
        editTask,
        deleteTask,
        parseTasks,
        markAsCompleted,
        setTasks,
      }}>
      {children}
    </TodoContext.Provider>
  );
};
