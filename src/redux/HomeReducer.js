const homeReducerInitialState = {
    userName: "ghfvh",
}

export const HomeReducer = (state = homeReducerInitialState, action) => {
    switch(action.type) {
        case "SET_USER_NAME":
            return {
                ...state,
                userName: action.payload,
            };
        default:
            return state;
    }
}
