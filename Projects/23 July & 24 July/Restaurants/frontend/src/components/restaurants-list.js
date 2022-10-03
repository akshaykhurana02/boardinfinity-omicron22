import React, { useState, useEffect } from "react";
import RestaurantDataService from "../services/restaurant";
import { Link } from "react-router-dom";
import { Card, Dropdown } from "semantic-ui-react";

const RestaurantsList = (props) => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchZip, setSearchZip] = useState("");
  const [cuisinesOptions, setCuisinesOptions] = useState([
    {
      key: `All Cuisines`,
      value: `All Cuisines`,
      text: `All Cuisines`,
    },
  ]);

  useEffect(() => {
    retrieveRestaurants();
    retrieveCuisines();
  }, []); // componentDidMount

  const onChangeSearchName = (e) => {
    const searchName = e.target.value;
    setSearchName(searchName);
    setSearchZip("");
  };

  const onChangeSearchZip = (e) => {
    const searchZip = e.target.value;
    setSearchZip(searchZip);
    setSearchName("");
  };

  const onChangeSearchCuisine = (e, data) => {
    let searchedCuisine = data.value;
    if (searchedCuisine == "All Cuisines") {
      refreshList();
    } else {
      find(searchedCuisine, "cuisine");
    }
  };

  const retrieveRestaurants = () => {
    RestaurantDataService.getAll()
      .then((response) => {
        console.log(response.data);
        setRestaurants(response.data.restaurants);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const retrieveCuisines = () => {
    RestaurantDataService.getCuisines()
      .then((response) => {
        console.log(`All Cuisines ${response.data}`);
        let cuisinesArray = [];
        for (let i = 0; i < response.data.length; i++) {
          cuisinesArray.push({
            key: `${response.data[i]}`,
            value: `${response.data[i]}`,
            text: `${response.data[i].substring(0, 20)}`,
          });
        }
        setCuisinesOptions(cuisinesArray);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveRestaurants();
  };

  const find = (query, by) => {
    RestaurantDataService.find(query, by)
      .then((response) => {
        console.log(response.data);
        setRestaurants(response.data.restaurants);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const findByName = () => {
    find(searchName, "name");
  };

  const findByZip = () => {
    find(searchZip, "zipcode");
  };

  return (
    <div>
      <form class="ui form">
        <div class="ui fluid action input" style={{ marginBottom: "0.5rem" }}>
          <input
            type="text"
            placeholder="Search By Name"
            value={searchName}
            onChange={onChangeSearchName}
          />
          <div
            class="ui primary button"
            style={{ marginLeft: "0.5rem" }}
            onClick={findByName}
          >
            Search
          </div>
        </div>
        <div class="ui fluid action input" style={{ marginBottom: "0.5rem" }}>
          <input
            type="text"
            placeholder="Search By Zip Code"
            value={searchZip}
            onChange={onChangeSearchZip}
          />
          <div
            class="ui primary button"
            style={{ marginLeft: "0.5rem" }}
            onClick={findByZip}
          >
            Search
          </div>
        </div>
      </form>

      <Dropdown
        placeholder="Select Cuisine"
        fluid
        search
        selection
        clearable
        options={cuisinesOptions}
        onChange={(e, data) => onChangeSearchCuisine(e, data)}
      />

      <div className="ui grid" style={{ marginTop: "4rem" }}>
        {restaurants.map((restaurant) => {
          const address = `${restaurant.address.building} ${restaurant.address.street}, ${restaurant.address.zipcode}`;
          return (
            <div class="eight wide column">
              <center>
                <Card
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "2rem",
                    height: "16rem",
                  }}
                >
                  <Card.Header
                    content={restaurant.name}
                    style={{
                      fontSize: "16px",
                      color: "#2185D0",
                      marginTop: "0.5rem",
                    }}
                  />
                  <Card.Description>
                    <div style={{ marginTop: "1rem" }}>
                      <span style={{ fontWeight: "bold" }}>Cuisine: </span>
                      <span>{restaurant.cuisine}</span>
                    </div>
                    <div style={{ marginTop: "1rem" }}>
                      <span style={{ fontWeight: "bold" }}>Address: </span>
                      <span>{address}</span>
                    </div>
                  </Card.Description>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between", // For Horizontal Alignment
                      marginTop: "2rem",
                    }}
                  >
                    <Link
                      to={"/restaurants/" + restaurant._id}
                      style={{ marginLeft: "1rem" }}
                    >
                      View Reviews
                    </Link>
                    <a
                      target={"_blank"}
                      href={"https://www.google.com/maps/place/" + address}
                      style={{ marginRight: "1rem" }}
                    >
                      View Map
                    </a>
                  </div>
                </Card>
              </center>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantsList;
