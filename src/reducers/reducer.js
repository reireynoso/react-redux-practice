const initialState = {
    currentUser: {}
}

function reducer(state=initialState, action){
    switch(action.type){
        case "SET_USER": 
        // debugger
        return {
            ...state,
            currentUser: action.payload
        }
        default: return state
    }
}

export default reducer