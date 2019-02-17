import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch }  from 'react-router-dom';
import CatRandom  from'./components/CatRandom';
import DogRandom  from'./components/DogRandom';
import DogBreeds  from'./components/DogBreeds';
import Nav  from'./components/Nav';

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
      <Router>
        <div className='container'>
          <Nav />
          <Switch>
            <Route exact path='/' component={DogRandom} />
            <Route exact path='/dograndom' component={DogRandom} />
            <Route exact path='/dogbreeds' component={DogBreeds} />
            <Route path='/catrandom' component={CatRandom} />
            <Route render={function () {
              return <p>Not Found</p>
            }} />
          </Switch>
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
