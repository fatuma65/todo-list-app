import './Navbar.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
      <header>
        <h1>Todo</h1>
        <nav>
          <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/add/tasks'}>Add Tasks</Link></li>
            <li><Link to={'/tasks'}>Tasks</Link></li>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Navbar;
