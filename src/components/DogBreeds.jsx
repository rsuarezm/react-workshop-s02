import React, { Component } from 'react';
import { fetchAllBreeds } from '../utils/api';

class DogBreads extends Component {
  constructor(props) {
    super(props);
    this.state = { breeds: [] };
    this.dogBreedsArray = this.dogBreedsArray.bind(this);
  }

  componentDidMount() {
    fetchAllBreeds(data =>
      this.setState(
        { breeds: Object.entries(data.message) }
      )
    );
  }

  dogBreedsArray(breeds) {
    let list = [];

    for (let [dog, dogBreeds] of breeds) {
      list.push(<li key={dog}>{dog}</li>)
      if (dogBreeds.length) dogBreeds.map(perro => list.push(<li key={perro}>{perro}</li>))
    }

    return list
  }

  render() {
    const { breeds } = this.state;
    return (
      <div>
        <ul className="dogsList">
          {this.dogBreedsArray(breeds)}
        </ul>
      </div>
    );
  }
}

export default DogBreads;