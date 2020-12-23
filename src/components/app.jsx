import React, { Component } from 'react';
import SimpleMap from './simple_map';
import FlatList from './flat_list';
import flats from '../../data/flats';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flatList: flats,
      selectedFlat: null
    };
  }

  changeSelectedFlat = (index) => {
    this.setState({
      selectedFlat: this.state.flatList[index]
    });
  }

  render() {
    console.log(this.state.selectedFlat);
    return (
      <div>
        <FlatList flats={this.state.flatList} changeSelectedFlat={this.changeSelectedFlat} />
        <div className="map-container">
          <SimpleMap />
        </div>
      </div>
    );
  }
}

export default App;
