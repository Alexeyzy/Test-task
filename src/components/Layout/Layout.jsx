import { NavLink, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

export default function Layout() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <img src="/Logo.svg" alt="Logo" />
          <nav className={styles.nav}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.active : styles.link
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/catalog"
              className={({ isActive }) =>
                isActive ? styles.active : styles.link
              }
            >
              Catalog
            </NavLink>
          </nav>
        </div>
      </header>

      <Outlet />
    </>
  );
}
