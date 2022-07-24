import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import AddReview from "./components/add-review";
import Restaurant from "./components/restaurants";
import RestaurantsList from "./components/restaurants-list";
import Login from "./components/login";

function App() {
  const [user, setUser] = React.useState(null);

  async function login(user = null) {
    setUser(user);
  }

  async function logout() {
    setUser(null);
  }

  return (
    <div>
      <div style={{ margin: "5px" }}>
        <div class="ui primary menu">
          <a href="/" class="item active">
            Home
          </a>
          <a href="/restaurants" class="item active">
            Restaurants
          </a>
          <a href="/restaurants-reviews" class="item active">
            Restaurants Reviews
          </a>
          <div class="right menu">
            <a href="/login" class="item">
              Login
            </a>
          </div>
        </div>
      </div>

      <div className="ui container" style={{ marginTop: "30px" }}>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Login {...props} login={login} />}
          />
          <Route exact path="/restaurants" component={RestaurantsList} />
          <Route exact path="/restaurants-reviews" />
          <Route
            path="/restaurants/:id/review"
            render={(props) => <AddReview {...props} user={user} />}
          />
          <Route
            path="/restaurants/:id"
            render={(props) => <Restaurant {...props} user={user} />}
          />
          <Route
            path="/login"
            render={(props) => <Login {...props} login={login} />}
          />
        </Switch>
      </div>
    </div>
  );
}

export default App;
