import "./HomePageStyles.css";
import CreateTasks from "./CreateTasks";
import Tasks from "./Tasks";
const HomePage = () => {
  return (
    <>
      <div className="page">
        <div className="relative bg-gradient-to-r from-sky-500 to-indigo-500 home-page">
          <h1 className="text-6xl font-bold text-white">Just Do It</h1>
        </div>
        <div className="home text-white">
          <CreateTasks />
          <Tasks />
        </div>
      </div>
    </>
  );
};
export default HomePage;
