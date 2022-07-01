import React from 'react'
import Logo from '../assets/logo.png'
import '../assets/css/fonts.css'

const Animation = () => {
  return (

    <div className='flex h-[90vh]  justify-center items-center loading-bg-gradient'>
        <img className=' rounded-md md:rounded-2xl sm:rounded-xl zoom-animation' src={Logo} alt="Logo.png" />
        <h1> Add sessionstorage values in redux store</h1>
    </div>
  )
}

export default Animation