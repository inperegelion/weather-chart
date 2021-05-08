import { useState } from "react";

import Chart from "./components/Chart";
import Search from "./components/Search";
import CityContext from "./contexts/CityContext";

import "./App.css";

const App = () => {
  const [city, setCity] = useState("");
  const value = { city, setCity };
  return (
    <CityContext.Provider value={value}>
      <div className="App">
        <Search />
        <Chart city={city}/>
      </div>
    </CityContext.Provider>
  );
};

export default App;
