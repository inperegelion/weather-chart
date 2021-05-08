import { useDispatch, useSelector } from "react-redux";
import { selectCity, setCity } from "../../redux/forecastSlice";


const Search: React.FC = props => {
  const city = useSelector(selectCity)
  const dispatch = useDispatch();

  const handleCity = (event: any) => {
    dispatch(setCity(event.target.value))
  }

  return (
    <>
      <p>entered: {city}</p>
      <input
        type="text"
        value={city}
        placeholder="Enter city name"
        onChange={handleCity}
      />
    </>
  )
}

export default Search;