import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Brush,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
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
    return <div>{renderChart()}</div>;
  };

  const renderChart = () => (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="time" />
      <YAxis />
      <Tooltip />
      <Legend verticalAlign="top" wrapperStyle={{ lineHeight: "40px" }} />
      <ReferenceLine y={0} stroke="#000" />
      <Brush dataKey="time" height={30} stroke="#8884d8" />
      <Bar dataKey="temperature" fill="#8884d8" />
      {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
    </BarChart>
  );

  return (
    <div>
      <h3>Forecast for {city}</h3>
      {renderContent()}
    </div>
  );
};

export default Chart;
