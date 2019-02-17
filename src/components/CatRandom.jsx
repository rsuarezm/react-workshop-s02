import React, { Component } from 'react';
import {fetchRandomCat} from '../utils/api';

class CatRandom extends Component {
  constructor(props){
    super(props);
    this.state = { logo: undefined };
  }
  componentDidMount() {
    fetchRandomCat(data => 
      this.setState({logo:data.url}));
  }

  render() {
    const  {logo} = this.state;
    return (
      <div className="App">
        <header className="App-header">
        {!logo
          ? <p>LOADING!</p>
          :  <img src={logo} className="App-logo" alt="logo" /> }
        </header>
      </div>
    );
  }
}

export default CatRandom;
