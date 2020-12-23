import React, { Component } from 'react';
import SimpleMap from './simple_map';
import FlatList from './flat_list';
import flats from '../../data/flats';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flatList: flats
    };
  }

  render() {
    return (
      <div>
        <FlatList flats={this.state.flatList} />
        <div className="map-container">
          <SimpleMap />
        </div>
      </div>
    );
  }
}

export default App;
