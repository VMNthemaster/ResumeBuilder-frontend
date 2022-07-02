import React from 'react'
import Logo from '../assets/logo.png'
import '../assets/css/fonts.css'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/index'
 
const Header = () => {
  const dispatch = useDispatch()
  const { logout,setResumeUserId } = bindActionCreators(actionCreators, dispatch)
  const isNotLoggedIn = useSelector((state) => state.auth)
  const resumeUserId = useSelector((state) => state.resumeUserId)
  const navigate = useNavigate()

  const handleImgClick = () => {
    if(isNotLoggedIn){
      navigate('/')
    }
    else{
      navigate('/resumes')
    }
  }

  return (
    <div className="h-[10vh] flex flex-row items-center bg-gradient-to-r from-purple-700 via-violet-700 to-blue-700 hover:bg-gradient-to-l place-content-between px-[1vw]">
      <div className="flex flex-row items-center gap-x-[1vw]">
        <div className="py-[1vh] ">
          <img
            onClick={handleImgClick}
            className="h-[8vh] rounded-md hover:cursor-pointer"
            src={Logo}
            alt="Resume Builder"
          />
        </div>
        <div
          onClick={handleImgClick}
          className="hover:cursor-pointer border-2 border-yellow-200 px-[0.5vw] py-[0.75vh] rounded-md"
        >
          <h1 className="font-bold text-2xl text-yellow-200 fonts">
            RESUME BUILDER
          </h1>
        </div>
      </div>
      {resumeUserId && (
        <div className="center-items">
          <div
            onClick={() => navigate('/resumes/create')}
            className="underline underline-offset-2  cursor-pointer decoration-white hover:decoration-gray-200 "
          >
            <h1 className=" text-2xl fonts text-white hover:text-gray-200 ">
              Create Resume
            </h1>
          </div>
        </div>
      )}
      <div className="flex flex-row items-center  gap-[1vw]">
        {!resumeUserId && (
          <div
            onClick={() => navigate('/login')}
            className="flex justify-center py-[0.5vh] w-[5vw] px-[0.75vw] border-2 border-gray-100 rounded-md text-black font-bold fonts text-[1.25rem] bg-gray-100 hover:bg-gray-200 hover:border-gray-200 hover:cursor-pointer zoom-reverse"
          >
            <h1>Login</h1>
          </div>
        )}
        {!isNotLoggedIn && resumeUserId && (
          <div
            onClick={() => {
              // sessionStorage.removeItem('resumeUserId')
              setResumeUserId('')
              logout()
              navigate('/login')
            }}
            className="flex justify-center py-[0.5vh] w-[5vw] px-[0.75vw] border-2 border-gray-100 rounded-md text-black font-bold fonts text-[1.25rem] bg-gray-100 hover:bg-gray-200 hover:border-gray-200 hover:cursor-pointer zoom-reverse"
          >
            <button>Logout</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
