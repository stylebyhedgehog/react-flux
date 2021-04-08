import ActionTypes from "./ActionTypes.js";
import PhonesDispatcher from "./PhonesDispatcher.js";
 
const Actions = {
  addItem(text) {
    PhonesDispatcher.dispatch({
      type: ActionTypes.ADD_ITEM,
      text,
    });
  },
  removeItem(text) {
    PhonesDispatcher.dispatch({
      type: ActionTypes.REMOVE_ITEM,
      text,
    });
  },
  updateItem(text0,text1) {
    PhonesDispatcher.dispatch({
      type: ActionTypes.UPDATE_ITEM,
      text0,
      text1
    });
  }
};
 
export default Actions;