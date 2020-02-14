import React, { Component } from "react";
import Flowers from "./Flowers";
import { connect } from "react-redux";

class FlowersList extends Component {
  // state = {
  //   //filterPhrase: ""
  //   filterBy: "name"
  // };

// may need this in the cart for totalling price
  // handleChange = e => {
  //   let { name, value } = e.target;
  //   this.setState({ [name]: value });
  // };

  render() {

    const listOfFlowers =
      // this.props &&
      this.props.flowers
        // .filter(flower => flower.name.includes(this.state.filterName))

        //receives array to display the same on every card
        .map(flower => {
          return (
            <Flowers
            key={flower.id}
            flower={flower}
            //  addFlowerToCart={this.props.addFlowerToCart}
          /> 
          )
        }
         
      );
    console.log("testListOfFlowers", listOfFlowers)

    return (
      <div>
        {/* <Input
          className='mb-3 mt-3'
          placeholder='Please Make Your Selection ...'
          type='text'
          name='filterPhrase'
          onChange={this.handleChange}
        />
        {
          <select name='filterBy' onChange={this.handleChange}>
            <option value='name'>Name</option>
          </select>
        } */}
        {listOfFlowers}
      </div>
    );
  }
}

//1. setup mapStateToProps (for flowers)
//2. setup connect
//The first argument to a mapStateToProps function is the entire Redux store state
// to add data to component props

const mapStateToProps = state => {
  return {
    flowers: state.flowers.all
  };
};
export default connect(mapStateToProps)(FlowersList);
