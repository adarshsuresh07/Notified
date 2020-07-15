
const initialState = {
  loading: false
};

export default function(state = initialState, action) {
  // switch (action.type) {
  //   case SET_CURRENT_USER:
  //     return {
  //       ...state,
  //       isAuthenticated: !isEmpty(action.payload),
  //       user: action.payload
  //     };
  //   case USER_LOADING:
  //     return {
  //       ...state,
  //       loading: true
  //     };
  //   default:
  //     return state;
  // }
  return {
    ...state,
    loading: action.loading
  };
}
