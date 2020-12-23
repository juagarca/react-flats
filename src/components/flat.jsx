import React, { Component } from 'react';

class Flat extends Component {
  handleClick = () => {
    this.setState({
      active: true
    });
    this.props.changeSelectedFlat(this.props.index);
  }

  render() {
    return (
      <div
        className={`card ${this.props.active ? 'active' : ''}`}
        style={
          {
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)),
            url('${this.props.url}')`
          }}
        onClick={this.handleClick}
      >
        <div className="card-category">{this.props.price} {this.props.currency}</div>
        <div className="card-description"><h2>{this.props.name}</h2></div>
        <a className="card-link" href="#"></a>
      </div>
    );
  }
}

export default Flat;
