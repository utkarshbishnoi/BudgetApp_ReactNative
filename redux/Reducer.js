const initialState = {
  entries: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BUDGET_ENTRY':
      return {
        ...state,
        entries: [...state.entries, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
