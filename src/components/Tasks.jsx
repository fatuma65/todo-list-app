import useTodo from "../contexts/customHook";

const Tasks = () => {
  const { tasks } = useTodo();

  const tasksInLocalStorage = localStorage.getItem("tasks");
  const parseTasks = JSON.parse(tasksInLocalStorage);
  console.log(parseTasks);

  return (
    <>
      <div>
        {!tasksInLocalStorage
          ? tasks.map((task) => {
              return (
                <div
                  key={task.id}
                  className="flex items-center justify-between">
                  <div className="flex m-2">
                    <input type="checkbox" />
                    <h3 className="text-xl m-2">{task.text}</h3>
                  </div>

                  <div>
                    <button className="btn">Edit</button>
                    <button className="btn">Delete</button>
                  </div>
                </div>
              );
            })
          : parseTasks.map((task) => {
              return (
                <div
                  key={task.id}
                  className="flex items-center justify-between">
                  <div className="flex m-2">
                    <input type="checkbox" />
                    <h3 className="text-xl m-2">{task.text}</h3>
                  </div>

                  <div>
                    <button className="btn">Edit</button>
                    <button className="btn">Delete</button>
                  </div>
                </div>
              );
            })}
      </div>
    </>
  );
};

export default Tasks;
