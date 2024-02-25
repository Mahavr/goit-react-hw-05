import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";
import { GiFilmStrip } from "react-icons/gi";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const Navigation = () => {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <div className={css.wrapper}>
          <GiFilmStrip size="20" className={css.icon} />
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
        </div>
        <NavLink to="/movies" className={buildLinkClass}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
};
