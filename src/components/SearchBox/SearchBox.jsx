import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const name = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  const handleFilter = (event) => {
    const value = event.target.value;
    dispatch(changeFilter(value));
  };
  return (
    <div>
      <h2 className={css.titleSearch}>Find contacts by name</h2>
      <input
        className={css.input}
        type="text"
        value={name}
        onChange={handleFilter}
      ></input>
    </div>
  );
};

export default SearchBox;
