import { useDispatch, useSelector } from "react-redux";
import { setCity } from "../../redux";

const Search = () => {
  const dispatch = useDispatch();
  const city = useSelector((state) => state.city);

  return (
    <div>
      <label htmlFor="city-name">Enter city / town name:</label>
      <input
        name="city-name"
        type="text"
        value={city}
        onChange={(ev) => dispatch(setCity(ev.target.value))}
      />
    </div>
  );
};
export default Search;
