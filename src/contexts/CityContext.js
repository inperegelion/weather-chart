import React from "react";

const CityContext = React.createContext({
  city: "Vinnytsia",
  setCity: () => {},
});

export default CityContext;
