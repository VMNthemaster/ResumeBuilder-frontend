// initial state variable will be isNotLoggedIn hence initail state will be true
const authReducer = (state = true, action) => {
  if (action.type === 'login') {
    return false
  } else if (action.type === 'logout') {
    return true
  } else {
    return state
  }
}

export default authReducer
