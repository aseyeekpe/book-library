import { useState } from "react";
import YearSelection from "./components/YearSelection";
import Greeting from "./components/Greeting";
import Cards from "./components/Cards";

import "./App.css";

function App() {
  const [selectedYear, setSelectedYear] = useState("2026");
  return (
    <>
      <div className="greeting">
        <Greeting></Greeting>
      </div>
      <div className="main-portion">
        <div className="yearSelection">
          <YearSelection
            selectedYear={selectedYear}
            onSelectYear={setSelectedYear}
          />
        </div>
        <div>
          <Cards selectedYear={selectedYear} />
        </div>
      </div>
    </>
  );
}

export default App;
