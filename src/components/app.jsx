import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import FlatList from './flat_list';
import flats from '../../data/flats';
import Marker from './marker';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flatList: flats,
      selectedFlat: flats[0]
    };
  }

  changeSelectedFlat = (index) => {
    this.setState({
      selectedFlat: this.state.flatList[index]
    });
  }

  defaultCenter = () => {
    return {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng
    };
  }

  render() {
    // console.log(this.defaultCenter);
    return (
      <div>
        <FlatList flats={this.state.flatList} selectedFlat={this.state.selectedFlat} changeSelectedFlat={this.changeSelectedFlat} />
        <div className="map-container">
          <GoogleMapReact center={this.defaultCenter()} defaultZoom={12}>
            <Marker lat={this.state.selectedFlat.lat} lng={this.state.selectedFlat.lng}></Marker>
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
