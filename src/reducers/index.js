import { combineReducers } from "redux";
import { items, itemsHasErrored, itemsIsLoading, filter } from "./items";

export default combineReducers({
  items,
  itemsHasErrored,
  itemsIsLoading,
  filter
});
