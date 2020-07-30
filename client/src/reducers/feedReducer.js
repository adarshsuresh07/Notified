
const initialState = {
  stack: 0,
  modalon: 0,
  data: {},
  edit: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "Edit-Modal-On":
      return {
        ...state,
        modalon: 3,
        edit: action.data,
        data: {}
      };
    case "New-Modal-On":
      return {
        ...state,
        modalon: 2,
        edit: {},
        data: {}
      };
    case "Modal-On":
      return {
        ...state,
        modalon: 1,
        data: action.data,
        edit: {}
      };
    case "Modal-Off":
      return {
        stack: 0,
        modalon: 0,
        data: {},
        edit: {}
      }
    default:
      return state
  }
}
