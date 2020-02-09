import React, { Component } from "react";
import Flowers from "./Flowers";
import { Input } from "reactstrap";

class FlowersList extends Component {
  state = {
    filterPhrase: ""
    // filterBy: "name"
  };

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    let nameOfFlower = this.props.flowersList
      .filter(flower => flower.name.includes(this.state.filterPhrase))
      .map(flower => (
        <Flowers
          key={flower.id}
          flower={flower}
          addFlowerToCart={this.props.addFlowerToCart}
        />
      ));
    // console.log(nameOfFlower);
    return (
      <div>
        <Input
          className='mb-3 mt-3'
          placeholder='Please Make Your Selection ...'
          type='text'
          name='filterPhrase'
          onChange={this.handleChange}
        />
        {/* <select name='filterBy' onChange={this.handleChange}>
          <option value='name'>Name</option>
        </select> */}
        {nameOfFlower}
      </div>
    );
  }
}

export default FlowersList;
