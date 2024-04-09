import { applyMiddleware } from "redux";
import {createStore} from "redux"
import { thunk } from "redux-thunk";

let initialState = {
  emojis: [],
};

function emojiReducer(state = initialState, action) {
  switch (action.type) {
    case "emoji/get":
      return { ...state, emojis: action.payload };
    default:
      break;
  }

  return state;
}

const store = createStore(emojiReducer, applyMiddleware(thunk));

export function getEmojis() {
    return function(dispatch){

        fetch("https://emojihub.yurace.pro/api/all")
          .then((res) => res.json())
          .then((data) => {
            dispatch({ type: "emoji/get", payload: data });
            console.log(data);
          });
    }
  };

export default store;
