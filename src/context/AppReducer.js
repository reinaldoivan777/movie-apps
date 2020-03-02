export default (state, action) => {
  switch (action.type) {
    case "GET_RESULT":
      return {
        ...state,
        results: action.payload
      };
    default:
      return state;
  }
};
