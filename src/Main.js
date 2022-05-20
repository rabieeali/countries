import axios from "axios";
import { useEffect, useState } from "react";

const Main = () => {
  const url = "https://restcountries.com/v3.1/all";
  useEffect(() => {
    axios.get(url).then((res) => setCountries(res.data));
  }, []);

  const [countries, setCountries] = useState([]);
  function search(value) {
    setCountries(countries.filter((el) => el.name.common.toLowerCase().includes(value)));
  }
  return (
    <div>
      {countries.map((elem) => (
        <div className="d-inline">
          <span className="bg-primary mx-1">{elem.name.common}</span>
        </div>
      ))}

      <br />
      <input onChange={(e) => search(e.target.value)} />
    </div>
  );
};

export default Main;
