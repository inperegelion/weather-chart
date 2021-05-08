import { useEffect } from "react";
import getForecast from "../../api/getForecast";

const Chart: React.FC = props => {

  useEffect(() => {
    getForecast("Vinnytsia")
  }, [])

  return (
    <div>
      <h3>data:</h3>
      {/* <div>{props}</div> */}

    </div>
  )
}

export default Chart;