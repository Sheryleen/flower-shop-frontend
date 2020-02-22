import * as types from "./constants";

const initialState = {
  all: [],
  err: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ALL_FLOWERS_PENDING:
    case types.ADD_FLOWER_PENDING:
    case types.REMOVE_FLOWER_PENDING:
      return state;

    case types.FETCH_ALL_FLOWERS_FAILED:
    case types.ADD_FLOWER_FAILED:
    case types.REMOVE_FLOWER_FAILED:
      return {
        ...state,
        err: action.payload
      };
    case types.FETCH_ALL_FLOWERS_SUCCESS:
      return {
        ...state,
        all: action.payload
      };

    case types.ADD_FLOWER_SUCCESS:
      return {
        ...state,
        all: [...state.all, action.payload[0]]
      };
    case types.REMOVE_FLOWER_SUCCESS:
      console.log("action", action);
      return {
        ...state,
        //take array from payload give all then the deleted one
        all: state.all.filter(FLOWER => FLOWER.id !== action.payload[0].id)
      };
    case types.UPDATE_FLOWER_SUCCESS: //once changed look for one came back and change to the one that came back
      return {
        ...state,
        all: state.all.map(flower => {
          if (flower.id === action.payload[0].id) {
            return action.payload[0];
          } else {
            return flower;
          }
        })
      };

    //searching through array of flowers to see which flower matches the condition
    //received action from actionCreator through dispatch
    //to find id and make change
    case types.ADD_TO_CART:
      return {
        ...state,
        all: state.all.map(flower => {
          if (flower.id === action.payload) {
            flower.in_cart = true;
          }
          return flower;
        })
      };

    default:
      return state;
  }
};
