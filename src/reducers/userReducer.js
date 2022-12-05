export function userReducer(state = { happy: true }, action) {
  switch (action.type) {
    case "LOGIN":
      return action.payload;
    default:
      return state;
  }
}
