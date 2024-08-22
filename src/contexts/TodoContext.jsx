import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTasks = async (taskItem) => {
    console.log(taskItem);
    const id = uuidv4();
    const newTask = { id, text: taskItem };
    const tasksAlreadyInLocalStorage = localStorage.getItem("tasks");
    setTasks((prevTasks) => {
      const currentTodos = tasksAlreadyInLocalStorage
        ? JSON.parse(tasksAlreadyInLocalStorage)
        : [];

      const updatedTasks = [...currentTodos, newTask];

      let convertTasksIntoArray = JSON.stringify(updatedTasks);
      console.log(convertTasksIntoArray);

      localStorage.setItem("tasks", convertTasksIntoArray);
      return updatedTasks;
    });
  };
  const editTask = (taskItem) => {
    return taskItem;
  };
  const deleteTask = (taskItem) => {
    return taskItem;
  };

  return (
    <AuthContext.Provider
      value={{
        tasks,
        addTasks,
        editTask,
        deleteTask,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
export { AuthContext, AuthProvider };
