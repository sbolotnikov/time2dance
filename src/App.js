
import React from 'react';
import "./App.css";
import Home from "./pages/home";
import Base from "./pages/base";
import { AnimatePresence } from "framer-motion";
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Route
          render={({ location }) => (
            <AnimatePresence initial={false} exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
                <Route path='/' exact component={Base} />
                <Route path='/anim' component={Home} />
              </Switch>

            </AnimatePresence>
          )}
        />
      </Router>
    </div>

  );
}


export default App;
