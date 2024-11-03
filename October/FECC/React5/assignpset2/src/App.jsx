import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch("https://restcountries.com/v3.1/all");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        let countries = await response.json();
        setData(countries);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    // Update the document title when the component mounts or updates
    document.title = `Loaded ${data.length} countries`;
  }, [data]); // The title will update whenever 'data' changes

  return (
    <>
      {data.map((country) => (
        <div key={country.name.common}>
          <h1>
            {country.name.common} - {country.flag}
          </h1>
        </div>
      ))}
    </>
  );
}

export default App;
