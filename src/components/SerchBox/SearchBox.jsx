import toast from "react-hot-toast";
import css from "./searchBox.module.css";
import { TbDeviceDesktopSearch } from "react-icons/tb";
export const SearchBox = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (e.target.elements.query.value.trim() === "") {
      toast.error("Please enter a request");
      return;
    }

    onSubmit(e.target.elements.query.value);
    e.target.reset();
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.searchBar}
        type="text"
        name="query"
        placeholder="Search movie"
      />
      <button className={css.button} type="submit">
        <TbDeviceDesktopSearch size="24" />
      </button>
    </form>
  );
};
