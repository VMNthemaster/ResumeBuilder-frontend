import React from 'react'
import Logo from '../assets/logo.png'
import '../assets/css/fonts.css'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state'

const Animation = () => {
  const dispatch = useDispatch()
  const { setResumeUserId } = bindActionCreators(actionCreators, dispatch)
  setResumeUserId('')
  return (
    <div className="flex h-[90vh]  justify-center items-center loading-bg-gradient">
      <img
        className=" rounded-md md:rounded-2xl sm:rounded-xl zoom-animation"
        src={Logo}
        alt="Logo.png"
      />
    </div>
  )
}

export default Animation
