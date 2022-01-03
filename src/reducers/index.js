import { combineReducers } from "redux";

import flowReducer from './flowReducer';
import { reducer as formReducer } from "redux-form";

export default combineReducers({
    flow: flowReducer,
    form: formReducer
})