import { useEffect, useState } from "react";
import getForecast from "../../api/getForecast";

const Chart = (props) => {
  const { city } = props;
  let [data, setData] = useState();
  let [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    async function getDataset() {
      setisLoading(true);
      let dataSet = await getForecast(city);
      setData(dataSet);
      setisLoading(false);
    }

    if (city.length !== 0) getDataset();
  }, [city]);

  const renderContent = () => {
    if (city.length === 0) return <p>Please city / town name</p>;
    if (isLoading) return <p>Loading dataset...</p>;
    if (!data) return <p>Unknown city / town</p>;
    return <p>{JSON.stringify(data)}</p>;
  };

  return (
    <div>
      <h3>Forecast for {city}</h3>
      {renderContent()}
    </div>
  );
};

export default Chart;
