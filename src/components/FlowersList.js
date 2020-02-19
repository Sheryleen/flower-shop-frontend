import React, { Component } from "react";
import Flower from "./Flower";
import { connect } from "react-redux";

class FlowersList extends Component {
  
  render() {
    const listOfFlowers =
      this.props.flower

        //receives array to display the same on every card
        .map(flower => {
          return (
            <Flower
              key={flower.id}
              flower={flower}
            />
          );
        });
    console.log("testListOfFlowers", listOfFlowers);

    return (
      <div>
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
