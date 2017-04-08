// Promise
// pending
// fulfilled
// rejected
const initalState = {
  users: [],
  loading: false,
  error: null
};

// REDCUER
function usersReducer(state = initalState, action) {
  let user
  switch (action.type) {
    case 'FETCH_USER_PENDING':
      return { ...state, loading: true}
    case 'FETCH_USER_FULFILLED':
      users = action.payload.data.results
      return { ...state, loading: false };
    case 'FETCH_USER_REJECTED':
      return { ...state, loading: false, error: `${action.payload.message}` };
    default:
      return state;
  }
}

export default usersReducer;
