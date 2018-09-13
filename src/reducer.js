import {ADD_DREAM, UPDATE_DREAM, DELETE_DREAM} from './actions';


const initialState = {
    dreams: []
};

export const reducer = (state=initialState, action) => {
    if (action.type === ADD_DREAM) {
        return Object.assign({}, state, {
            dreams: [...state.dreams, action.dream]
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
