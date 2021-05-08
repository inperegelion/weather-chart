import { useState } from "react";

export default (props) => {
  let [text, setText] = useState("");

  return <input type="text" onChange={(ev) => setText(ev.target.value)} />;
};
