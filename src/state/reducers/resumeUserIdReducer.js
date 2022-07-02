const resumeUserIdReducer = (state='',action) => {
    if(action.type === 'getResumeUserId'){
        return state
    }
    else if(action.type === 'setResumeUserId'){
        return action.payload
    }
    else{
        return state
    }
}

export default resumeUserIdReducer