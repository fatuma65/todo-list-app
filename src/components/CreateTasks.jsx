import "./HomePageStyles.css";
import { useState, useEffect } from "react";
import useTodo from "../contexts/customHook";
const CreateTasks = ({editTaskId, setEditTaskId}) => {
  const { addTasks, tasks, editTask} = useTodo();
  const [todo, setTodo] = useState('');

  useEffect(() => {
    const taskToEdit = tasks.find((task) => task.id === editTaskId);
    if (taskToEdit) {
      setTodo(taskToEdit.text);
    }
  }, [editTaskId, tasks]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editTaskId) {
      editTask(editTaskId,todo);
      setTodo(editTaskId.text);
      setEditTaskId(null);
    }else {
    addTasks(todo);
    }
    setTodo("");
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
            placeholder="Enter Your Tasks Here"
          />
          <div className="btn-container"><i className='bx bx-plus-circle'></i>
          <button className="btn1 hover:bg-slate-700">
            {editTaskId ? "Update Task" : "Create task"}
          </button>
          </div>
        </div>
      </form>
    </>
  );
};
export default CreateTasks;
