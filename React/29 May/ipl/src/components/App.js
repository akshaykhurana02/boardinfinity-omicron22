import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Teams from "./Teams";
import Winners from "./Winners";
import About from "./About";
import ContactUs from "./ContactUs";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/teams" component={Teams} />
          <Route path="/winners" component={Winners} />
          <Route path="/about" component={About} />
          <Route path="/contact-us" component={ContactUs} />
        </>
      </BrowserRouter>
    </div>
  );
};

export default App;
