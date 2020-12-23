import React, { Component } from 'react';
import Flat from './flat';


class FlatList extends Component {
  constructor(props) {
    super(props);
  }

  renderList = () => {
    return this.props.flats.map((flat, index) => {
      return (
        <Flat
          name={flat.name}
          key={flat.name}
          url={flat.imageUrl}
          price={flat.price}
          currency={flat.priceCurrency}
          index={index}
          changeSelectedFlat={this.props.changeSelectedFlat}
        />
      );
    });
  }

  render() {
    return (
      <div className="flat-list">
        { this.renderList() }
      </div>
    );
  }
}

export default FlatList;
