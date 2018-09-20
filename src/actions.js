export const ADD_DREAM = 'ADD_DREAM';
export const addDream = (dreamTitle, dreamSummary, dreamDate) => ({
    type: ADD_DREAM,
    dreamTitle,
    dreamSummary,
    dreamDate
});

export const UPDATE_DREAM = 'UPDATE_DREAM';
export const updateDream = (dream, listIndex) => ({
    type: UPDATE_DREAM,
    dream,
    listIndex
});

export const DELETE_DREAM = 'DELETE_DREAM';
export const deleteDream = listIndex => ({
    type: DELETE_DREAM,
    listIndex
});
