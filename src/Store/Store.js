import { createStore } from "redux";
import FavReducer from "./Reducers/FavReducer";

const store = createStore(FavReducer);

export default store;