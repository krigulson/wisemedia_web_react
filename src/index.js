import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import { render } from "react-dom";
import injectSheet from 'react-jss';
import { BrowserRouter } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import BgImage from './components/BgImage/BgImage';
import { Navbar } from './components/Navbar/Navbar';
import WelcomeText from './components/MyComponent/WelcomeText';
import Footer from './components/Footer/Footer';


const App = ({ classes }) => (
  <BrowserRouter>
    <div>
      <Navbar />
      <BgImage />
      <Route path="/" exact render={
        () => {
          return (
            <WelcomeText text="Hello Folks!" />
          )
        }
      } />
      <Route path="/about-us" exact render={
        () => {
          return (
            <WelcomeText text={"About us ..."} />
          )
        }
      } />
      <Footer>Soola 3, Tartu, 11111, +372 000 000</Footer>
    </div>
  </BrowserRouter>
);

const StyledComp = injectSheet()(App)
render(<StyledComp />, document.getElementById("root"));
