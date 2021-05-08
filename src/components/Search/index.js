import { useContext } from "react";
import CityContext from "../../contexts/CityContext";

const Search = () => {
  const { city, setCity } = useContext(CityContext);

  return (
    <input
      type="text"
      value={city}
      onChange={(ev) => setCity(ev.target.value)}
    />
  );
};
export default Search;
