import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Portfolio from "./pages/portfolio";
import Homepage from "./pages/homepage";
import Footer from "./components/footer";
import "./App.css"

function App() {
  return (
    <Router>
      <div>
      <Nav />
      <Switch>
        <Route exact path={["/"]}>
          <Homepage />
        </Route>

        <Route exact path="/portfolio">
          <Portfolio />
          
        </Route>
      </Switch>
      <Footer />
      </div>
      
    </Router>
  );
}

export default App;
