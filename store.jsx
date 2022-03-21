import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../store/reducers/rootReducers";

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

export default store;