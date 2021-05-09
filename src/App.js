import { useSelector } from "react-redux";

import Chart from "./components/Chart";
import Search from "./components/Search";

import "./App.css";

const App = () => {
  const city = useSelector((state) => state.city);
  return (
    <div className="App">
      <Search />
      <Chart city={city}/>
    </div>
  );
};

export default App;
