
const initialState = {
  opdata: [],
  exdata: [],
  tododata:[],
  applieddata:[]
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        opdata: action.opdata,
        exdata: action.exdata,
        tododata:action.tododata,
        applieddata:action.applieddata
      };
    default:
      return state
  }
}
