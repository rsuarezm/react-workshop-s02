import React, { Component } from 'react';
import {fetchRandomLogo} from '../utils/api';

class DogRandom extends Component {
  constructor(props){
    super(props);
    this.state = { logo: undefined };
  }
  componentDidMount() {
    fetchRandomLogo(data => 
      this.setState({logo:data.message , status: data.status}));
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

export default DogRandom;
