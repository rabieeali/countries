import Card from "./Card";
import "./Loader.css";
import { Dropdown } from "react-bootstrap";

const Cards = ({ countries, setCountries }) => {

  const inputHandler = (e) => {
    let searchTerm = e.target.value;
    const filtered = (searchTerm) =>
      countries.filter((country) =>
       country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      );
    searchTerm.length ? setCountries(filtered(searchTerm)) : setCountries(countries);
  };

  return (
    <div className="container my-5">
      {/* serchbar */}
      <div className="row">
        <div className="col">
          <div className="wrapper">
            <div className="searchBar position-relative">
              <input
                onChange={(e) => inputHandler(e)}
                id="searchQueryInput"
                type="text"
                name="searchQueryInput"
                placeholder="Search By Country Name"
              />

              <svg
                className="position-absolute end-10"
                style={{ width: "24px", height: "24px" }}
                viewBox="0 0 24 24"
              >
                <path
                  fill="#666666"
                  d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="col text-end">
          <Dropdown>
            <Dropdown.Toggle variant="danger" id="dropdown-basic">
              Filter By Region
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      {/* end of serchbar */}

      {!countries.length ? (
        <div className="loader"></div>
      ) : (
        <div className="row g-5 mt-5">
          {countries.map((country, index) => (
            <Card
              key={index}
              name={country.name.common}
              capital={country.capital}
              img={country.flags.png}
              region={country.region}
              population={country.population}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cards;
