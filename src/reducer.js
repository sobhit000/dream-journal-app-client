import {ADD_DREAM, UPDATE_DREAM, DELETE_DREAM} from './actions';

const initialState = {    
    	dreamTitle: 'hello',
	    dreamSummary: '',
	    dreamDate: ''       
};

export const dreamReducer = (state=initialState, action) => {
    if (action.type === ADD_DREAM) {
        return Object.assign({}, state, {        	
        		dreamTitle:[...state.dreamTitle, action.dreamTitle],
	            dreamSummary: [...state.dreamSummary, action.dreamSummary],
	            dreamDate: [...state.dreamDate, action.dreamDate]        	            
        });
    }

    else if (action.type === UPDATE_DREAM) {
        return Object.assign({}, state, {
            dreams: state.dreams.map(dream =>
                dream.id === action.dream.id ? action.dream : dream
            )
        });
    }
    else if (action.type === DELETE_DREAM) {
        return Object.assign({}, state, {
            dreams: state.dreams.filter(dream => dream.id !== action.dream.id)
        });
    }
    return state;
};
