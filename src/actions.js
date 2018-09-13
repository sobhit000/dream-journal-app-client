export const ADD_DREAM = 'ADD_DREAM';
export const addDream = dream => ({
    type: ADD_DREAM,
    dream
});

export const UPDATE_DREAM = 'UPDATE_DREAM';
export const updateDream = dream => ({
    type: UPDATE_DREAM,
    dream
});

export const DELETE_DREAM = 'DELETE_DREAM';
export const deleteDream = dream => ({
    type: DELETE_DREAM,
    dream
});
