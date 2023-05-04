import { NavLink, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <div>
      <ul className={css['Header']}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies">Movies</NavLink>
        </li>
      </ul>
      <main>
        <Outlet />
      </main>
      <ToastContainer autoClose={2000} />
    </div>
  );
};

export default Layout;
