import "./HomePageStyles.css";
import { useState } from "react";
import useTodo from "../contexts/customHook";
const CreateTasks = () => {
  const [todo, setTodo] = useState("");
  const {addTasks, tasks} = useTodo()

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todo);
    addTasks(todo)
    console.log(tasks)
    setTodo( "" );
  };
  return (
    <>
      <form action="" className="task-form" onSubmit={handleSubmit}>
        <div className="task">
          <input
            type="text"
            name="todo"
            required
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Enter Tasks Here"
          />
          <button className="btn hover:bg-slate-700">Submit</button>
        </div>
      </form>
    </>
  );
};
export default CreateTasks;
