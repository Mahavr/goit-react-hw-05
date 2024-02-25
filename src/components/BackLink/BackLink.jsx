import { NavLink } from "react-router-dom";
import css from "./BackLink.module.css";
import { CgArrowLeft } from "react-icons/cg";
export const BackLink = ({ href, children }) => {
  return (
    <NavLink className={css.back} to={href}>
      <CgArrowLeft size="25" className={css.icon} />
      {children}
    </NavLink>
  );
};
