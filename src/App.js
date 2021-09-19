import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Country from "./components/Country";
import Header from "./components/Header";
import { useGlobalContext } from "./context";

function App() {
  const { isDark } = useGlobalContext();
  return (
    <div
      className={`${
        isDark ? "w-full h-full  box-border dark" : "w-full h-full box-border"
      }`}
    >
      <Router>
        <div className=" h-full w-full bg-primary dark:bg-secondary">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:slug" component={Country} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
