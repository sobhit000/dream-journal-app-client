import {ADD_DREAM, UPDATE_DREAM, DELETE_DREAM} from './actions';

const initialState = {
		pastDreams: []       
};

export const dreamReducer = (state=initialState, action) => {
    if (action.type === ADD_DREAM) {
        return Object.assign({}, state, {
        	pastDreams: [...state.pastDreams, {
        		dreamTitle: action.dreamTitle,
        		dreamSummary: action.dreamSummary,
        		dreamDate: action.dreamDate
        	}]
        });
    }

    else if (action.type === action.DELETE_DREAM) {    	
    	const newDreamList = pastDreams.splice(action.listIndex, 1);
    	return Object.assign({}, state, {
        	pastDreams: newDreamList
        });	        
    }
    //console.log(action.listIndex);        
    return state;

};
