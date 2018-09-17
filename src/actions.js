export const ADD_DREAM = 'ADD_DREAM';
export const addDream = (dreamTitle, dreamSummary, dreamDate) => ({
    type: ADD_DREAM,
    dreamTitle,
    dreamSummary,
    dreamDate
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
