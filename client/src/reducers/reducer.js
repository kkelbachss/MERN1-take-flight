const initialState = {
    refresh: 0,
    errorMessage:'',
    flight:{},
    sideBar:false
};


export const reducer = (state=initialState, action) => {
    switch(action.type) {
        case 'SET_REFRESH':
            return {...state, refresh: action.payload};
        case 'SET_ERROMSG':
            // {type: 'ADD_FRIEND', payload: {firstName: 'Sally', 'lastName: 'Smith'}}
            return {...state, errorMessage: action.payload};
        case 'SET_FLIGHT':
            return{...state, flight: action.payload};
        case 'SET_SIDEBAR':
            return{...state, sideBar: action.payload};
        default:
            return state; // Returns the previous state. AKA make no changes
    }
}