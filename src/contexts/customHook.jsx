import { useContext } from "react";
import { TodoContext } from "./TodoContext";

const useTodo = () => {
  const context = useContext(TodoContext);
  return context;
};
export default useTodo;
