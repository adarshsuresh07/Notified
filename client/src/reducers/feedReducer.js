
const initialState = {
  stack: 0,
  modalon: false,
  data: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "Modal-On":
      return {
        ...state,
        modalon: true,
        data: action.data,
        stack: action.stack
      };
    default:
      return {
        ...state,
        modalon: false,
        data:{},
      }
  }
}
