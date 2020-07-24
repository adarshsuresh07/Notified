
const initialState = {
  toast: false,
  type: "success",
  data: ""
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "Show_Toast":
      return {
        ...state,
        toast: true,
        type: action.result,
        data: action.data
      };
    case "OFF_Toast":
      return {
        ...state,
        toast: false,
      };
    default:
      return state;
  }
}
