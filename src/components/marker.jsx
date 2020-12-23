import React, { Component } from 'react';

class Marker extends Component {
  constructor(props) {
    super(props);
    console.log("marker created");
  }

  render() {
    return (
      <div className="marker">
      </div>
    );
  }
}

export default Marker;
