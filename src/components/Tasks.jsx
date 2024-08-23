import { useState } from "react";
import useTodo from "../contexts/customHook";
import CreateTasks from "./CreateTasks";
import "./HomePageStyles.css";

const Tasks = () => {
  const {
    tasks,
    deleteTask,
    parseTasks,
    markAsCompleted,
  } = useTodo();
  const [editTaskId, setEditTaskId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditing = (task) => {
    setIsEditing(true);
    setEditTaskId(task.id);
  };
  return (
    <>
      <div>
        <CreateTasks editTaskId={editTaskId} setEditTaskId={setEditTaskId} />
        {tasks ? (
          parseTasks &&
          parseTasks.map((task) => {
            return (
              <div key={task.id} className="flex items-center justify-between">
                <div className="flex m-2">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => markAsCompleted(task.id)}
                  />
                  <h3
                    className={`task-item text-xl m-2 ${
                      task.completed ? "completed" : "incomplete"
                    }`}>
                    {task.text}
                  </h3>
                </div>
                <div className="containers">
                  <div className="btn1-container">
                    <i class="bx bxs-edit"></i>
                    <button className="btn" onClick={() => handleEditing(task)}>
                      Edit
                    </button>
                  </div>
                  <div className="btn2-container">
                    <i class="bx bx-trash"></i>
                    <button
                      className="btn2"
                      onClick={() => deleteTask(task.id)}>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>No tasks available</p>
        )}
      </div>
    </>
  );
};

export default Tasks;

// {/* parseTasks.map((task) => {
//               return (
//                 <div
//                   key={task.id}
//                   className="flex items-center justify-between">
//                   <div className="flex m-2">
//                     <input type="checkbox" />
//                     <h3 className="text-xl m-2">{task.text}</h3>
//                   </div>

//                   <div>
//                     <button className="btn" onClick={() => editTask(task.id, task.text)}>
//                       Edit
//                     </button>
//                     <button className="btn" onClick={() => deleteTask(task.id)}>
//                       Delete
//                     </button>
//                     {/* <button className="btn">Delete</button> */}
//                   </div>
//                 </div>
//               );
//             })} */}
