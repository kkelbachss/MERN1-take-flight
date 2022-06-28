import { createStore } from 'redux';
import {reducer} from './reducers/reducer';


// Deprecated, Developers indicating to use redux-toolkit
const store = createStore(reducer);

export default store;