import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Cards from "./components/Cards";

const App = () => {
  const [countries, setCountries] = useState([]);



  useEffect(() => {
    const url = "https://restcountries.com/v3.1/all";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setCountries(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);



  return (
    <>
      <Header />
      <Cards
        countries={countries}
        setCountries={setCountries}
      />
    </>
  );
};

export default App;
