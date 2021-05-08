import Chart from "./components/Chart";
import Search from "./components/Search";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Search />
      <Chart city={`Vinnytsia`} />
    </div>
  );
}

export default App;
