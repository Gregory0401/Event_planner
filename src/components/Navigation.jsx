// import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

function Navigation() {
  return (
    <>
      <nav className={s.nav}>
        {/* <NavLink to="/" className={s.link}>
          Main
        </NavLink> */}
        {/* <NavLink to="/create" className={s.link}>
          Create Event
        </NavLink> */}
        {/* <NavLink to="/details" className={s.link}>
          Details Event
        </NavLink> */}
      </nav>
    </>
  );
}

export default Navigation;
