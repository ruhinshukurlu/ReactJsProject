import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home';
import About from './views/About';
import Products from './views/Products';


function App() {
  return (
    <div className="App">
     <Router>
      <Header/>
      <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/products/:id">
            <Products/>
          </Route>
        </Switch>
        <Footer/>
     </Router>
    </div>
  );
}

export default App;
