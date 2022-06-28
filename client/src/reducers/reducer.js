
const initialState = {
    refresh: 0,
    errorMessage:'',
};


export const reducer = (state=initialState, action) => {
    switch(action.type) {
        case 'SET_REFRESH':
            return {...state, refresh: action.payload};
        case 'SET_ERROMSG':
            // {type: 'ADD_FRIEND', payload: {firstName: 'Sally', 'lastName: 'Smith'}}
            return {...state, errorMessage: action.payload};
        default:
            return state; // Returns the previous state. AKA make no changes
    }
}