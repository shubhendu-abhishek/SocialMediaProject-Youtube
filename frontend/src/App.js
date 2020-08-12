import React from "react";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/register" exact component={RegisterPage} />
        <Route path="/login" exact component={LoginPage} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
