export const login = () => {
  return (dispatch) => {
    dispatch({
      type: 'login',
    })
  }
}

export const logout = () => {
  return (dispatch) => {
    dispatch({
      type: 'logout',
    })
  }
}

export const getResumeUserId = () => {
  return (dispatch) => {
    dispatch({
      type: 'getResumeUserId'
    })
  }
}

export const setResumeUserId = (id) => {
  return (dispatch) => {
    dispatch({
      type: 'setResumeUserId',
      payload: id
    })
  }
}
