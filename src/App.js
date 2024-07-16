import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import MovieDetail from "./components/MovieDetails/MovieDetails";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Footer from "./components/Footer/footer";
import "./App.scss";

const App = () => {
  return (
    <div>
      <Router>
        <Header></Header>
        <div className="container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/movie/:imdbID" component={MovieDetail} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
