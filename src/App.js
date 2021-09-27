import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Country from "./components/Country";
import Header from "./components/Header";
import { useGlobalContext } from "./context";
import ScrollToTop from "./ScrollToTop";

function App() {
  const { isDark, getCountries } = useGlobalContext();

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div
      className={`${
        isDark
          ? "w-full h-full box-border scrollbehavior dark"
          : "w-full h-full scrollbehavior box-border"
      }`}
    >
      <Router>
        <ScrollToTop />
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
