import {ADD_DREAM, UPDATE_DREAM, DELETE_DREAM} from './actions';

const initialState = {    
    	dreamTitle: 'title',
	    dreamSummary: 'summary',
	    dreamDate: '01-01-01'       
};

export const dreamReducer = (state=initialState, action) => {
    if (action.type === ADD_DREAM) {
        return Object.assign({}, state, {        	
        		dreamTitle: action.dreamTitle,
	            dreamSummary: action.dreamSummary,
	            dreamDate: action.dreamDate    	            
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
    console.log(state);
    return state;    
};
