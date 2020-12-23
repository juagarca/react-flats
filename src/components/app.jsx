import React, { Component } from 'react';
import SimpleMap from './simple_map';
import FlatList from './flat-list';

class App extends Component {

  constructor(props) {
    super(props);
    console.log("app created");
  }

  render() {
    return (
      <div>
        <div className="flat-list">
          <FlatList />
        </div>
        <div className="map-container">
          <SimpleMap />
        </div>
      </div>
    );
  }
}

export default App;
