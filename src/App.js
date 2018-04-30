import React, { Component } from 'react';
import Home from "./views/Home";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { WelcomeText } from "./components/WelcomeText";
import { BrowserRouter } from 'react-router-dom';
import Route from 'react-router-dom/Route';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Home />
          <Header />
          <Route path="/" exact render={
            ()=> {
              return (
                <WelcomeText text="Hello Folks!" />
              )
            }
          }/>
          <Route path="/about-us" exact render={
            ()=> {
              return (
                <WelcomeText text={"About us ..."}/>
              )
            }
          }/>
          <Footer>
            <ul className="list-inline text-center">
              <li className="list-inline-item">Wisemedia {(new Date().getFullYear())}</li>
              <li className="list-inline-item">Soola 3</li>
              <li className="list-inline-item">+372 000 000</li>
            </ul>
          </Footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
