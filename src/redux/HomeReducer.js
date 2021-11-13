const homeReducerInitialState = {
  userName: "",
  name: "",
  photoUrl: "",
  numFollowing: 0,
  numFollowers: 0,
};

export const HomeReducer = (state = homeReducerInitialState, action) => {
  switch (action.type) {
    case "SET_USER_NAME":
      return {
        ...state,
        userName: action.payload,
      };
    case "SET_NAME":
      return {
        ...state,
        name: action.payload,
      };
    case "SET_PHOTO_URL":
      return {
        ...state,
        photoUrl: action.payload,
      };
    case "SET_FOLLOWING":
      return {
        ...state,
        numFollowing: action.payload,
      };
    case "SET_FOLLOWERS":
      return {
        ...state,
        numFollowers: action.payload,
      };
    default:
      return state;
  }
};
