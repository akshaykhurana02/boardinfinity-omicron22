import React from 'react';
import Morning from './components/Morning';
import Afternoon from './components/Afternoon';
import Evening from './components/Evening';
import Night from './components/Night';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter> {/* This Component is a Parent Component for all Routes */}
        <div>
          <Route path="/" exact component={Morning} /> {/* Default Route */}
          <Route path="/morning" component={Morning} />
          <Route path="/afternoon" component={Afternoon} />
          <Route path="/evening" component={Evening} />
          <Route path="/night" component={Night} />
        </div>
      </BrowserRouter>
    </div>
  );
};

/* localhost:3000 = localhost:3000/ */

export default App;