import { useState } from "react";
import countryData from "./resources/countryData.json";
const App = () => {
  // console.log(countryData)
  const [search, setSearch] = useState("");
  const [suggestion, setSuggestion] = useState(true);
  let handleChange = (el) => {
    setSearch(el.target.value);
    setSuggestion(true);
  };
  let handleKeyDown = (el) => {
    if (el.keyCode === 27) {
      setSuggestion(false);
      console.log("Escape");
    }
  };
  let datalist = countryData.filter((el) => {
    if (el.name.toUpperCase().startsWith(search.toUpperCase())) {
      return el.name;
    }
  });
  return (
    <>
      <h1>Search Here</h1>
      <input
        type="text"
        name=""
        id="searchBox"
        list="suggestion"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <datalist id="suggestion" className="dataList">
        {suggestion &&
          datalist.map((el, i) => {
            return <option key={i}>{el.name} </option>;
          })}
      </datalist>
    </>
  );
};

export default App;
