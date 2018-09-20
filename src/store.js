import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import {dreamReducer} from './reducer';

export default createStore(
    combineReducers({
        form: formReducer,
        dreams: dreamReducer
    })
)