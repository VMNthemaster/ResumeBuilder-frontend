import React, { useState } from 'react'
import '../assets/css/fonts.css'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import {actionCreators} from '../state/index'
import { useDispatch } from 'react-redux'

const Login = () => {
  const dispatch = useDispatch() 
  const {login, setResumeUserId} = bindActionCreators(actionCreators, dispatch)
  const navigate = useNavigate()
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  })
  const [loginError, setLoginError] = useState('')

  const handleChange = (e) => {
    setInputs((prevInputs) => {
      return {
        ...prevInputs,
        [e.target.name]: e.target.value,
      }
    })
  }

  const sendRequestToBackend = async () => {
    const res = await axios
      .post('https://resumebuildernodejs.herokuapp.com/api/users/login', {
        email: inputs.email,
        password: inputs.password,
      })
      .catch((err) => {
        return {
          data: err.response.status,
        }
      })
    const data = await res.data 
    return data
  }
 
  const handleSubmit = (e) => {
    e.preventDefault()
    sendRequestToBackend().then((data) => {
      if (data === 400) {
        setLoginError('Invalid credentials')
      } else if (data === 500) {
        setLoginError('Server Error, try again later')
      } else {
        const id = data.credentials._id
        setResumeUserId(id)
        // sessionStorage.setItem('resumeUserId', resumeUserId)
        login()
        navigate('/resumes')
      }
    }) 
  }

  return (
    <div className="login-bg h-[90vh] w-[100vw]">
      <div className="flex flex-col justify-center items-center pt-[10vh] sm:w-[90vw] md:w-[65vw] mx-auto mb-[10vh]">
        <div>
          <h1 className="mt-[3vh] text-3xl fonts underline mb-[4.5vh]">
            Login to Resume Builder
          </h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col px-[2vw] py-[2vh] border-2 border-black rounded-md gap-y-[2vh] sm:w-[80vw] md:w-[40vw] mx-auto justify-center items-center bg-amber-50"
        >
          {loginError && (
            <h1 className="fonts text-xl mt-[0.5vh] text-red-500">
              {loginError}
            </h1>
          )}
          <div>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={inputs.email}
              onChange={handleChange}
              required={true}
              className="w-[35vw] px-[0.75vw] py-[1vh] border-2 border-black rounded-md text-xl fonts"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={inputs.password}
              onChange={handleChange}
              required={true}
              className="w-[35vw] px-[0.75vw] py-[1vh] border-2 border-black rounded-md text-xl"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <button className="w-[12vw] px-[0.5vw] py-[0.75vh] border-2 border-black rounded-md text-xl bg-gradient-to-r from-blue-300 to-blue-500 hover:bg-gradient-to-l zoom-reverse">
              Login
            </button>
            <h1 className="fonts text-xl mt-[0.5vh]">
              Not a user.{' '}
              <Link className="text-violet-900 underline" to="/signin">
                Sign In
              </Link>{' '}
              instead
            </h1>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
