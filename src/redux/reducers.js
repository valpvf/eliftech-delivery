import { combineReducers } from "redux";
import { ADD_NFT } from "./actionTypes";

// define an initial state
const initialState = {
  nfts: [],
};

// define an updateState reducer which takes the
// initial state and action and calculates the new
// state. Note that currently we've only 1 action
// viz ADD_NFT

const updateState = (state = initialState, action) => {
    console.log(action);
  switch (action.type) {
    case ADD_NFT: {
      const { id, nft } = action.data;
      const mynft = {};
      mynft[id] = nft;
      return {
        nfts: [...state.nfts, mynft],
      };
    }
    default:
          return state;
  }
};

// rootReducer combines all the reducers, but currently
// we've got just 1 reducer
const rootReducer = combineReducers({ nfts: updateState });
export default rootReducer;
