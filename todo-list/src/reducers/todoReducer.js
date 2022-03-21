import TODO_ACTIONS from "../actions/todoActions";
const todoReducer = (state, action) => {
  let newTodo;
  switch (action.type) {
    case TODO_ACTIONS.ADD_TODO:
      if (action.payloads.text !== "") {
        console.log(action.payloads.text);
        newTodo = [
          ...state,
          {
            data: action.payloads.text,
            date: new Date().toLocaleString().split(",")[0],
            isCompleted: false,
          },
        ];

        action.payloads.setText("");
        localStorage.setItem("todos", JSON.stringify(newTodo));
        return newTodo;
      }
      return state;
    case TODO_ACTIONS.TOGGLE_TODO:
      newTodo = state.map((todo, index) =>
        index === action.payloads.index
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );
      localStorage.setItem("todos", JSON.stringify(newTodo));
      return newTodo;

    case TODO_ACTIONS.DEL_TODO:
      const response = window.confirm("Do you want to delete ? ");

      if (response) {
        newTodo = state.filter((_, index) =>
          index === action.payloads.index ? false : true
        );

        localStorage.setItem("todos", JSON.stringify(newTodo));
        return newTodo;
      }

      return state;

    default:
      return state;
  }
};

export default todoReducer;
