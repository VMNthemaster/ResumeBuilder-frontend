import React from 'react'
import '../../assets/css/fonts.css'

const Step1 = ({ value, handleChange, inputs }) => {
  return (
    <div
      className={`${
        value === 1 ? 'visible' : 'hidden'
      } step1 flex flex-col  gap-y-[3vh]`}
    >
      <h1 className="text-center font-bold fonts text-3xl py-[2vh] underline underline-offset-1">
        GENERAL DETAILS
      </h1>
      <div className="h-[0.35vh] bg-gray-600 w-[30vw] mx-auto"></div>
      <div className="flex justify-between">
        <input
          onChange={handleChange}
          type="text"
          name="firstName"
          value={`${inputs.firstName}`}
          className="w-[25vw] h-[5vh] px-[0.7vw] rounded-md outline-none text-xl border-2 border-black fonts placeholder-gray-900"
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          type="text"
          name="lastName"
          value={`${inputs.lastName}`}
          className="w-[25vw] h-[5vh] px-[0.7vw] rounded-md outline-none text-xl border-2 border-black fonts placeholder-gray-900"
          placeholder="Last Name"
        />
      </div>
      <div className="flex justify-between">
        <input
          onChange={handleChange}
          type="text"
          name="profession"
          value={`${inputs.profession}`}
          className="w-[25vw] h-[5vh] px-[0.7vw] rounded-md outline-none text-xl border-2 border-black fonts placeholder-gray-900"
          placeholder="Profession"
        />
        <input
          onChange={handleChange}
          type="email"
          name="email"
          value={`${inputs.email}`}
          className="w-[25vw] h-[5vh] px-[0.7vw] rounded-md outline-none text-xl border-2 border-black fonts placeholder-gray-900"
          placeholder="Email"
        />
      </div>
      <div>
        <textarea
          onChange={handleChange}
          name="shortdesc"
          value={`${inputs.shortdesc}`}
          className="w-[51vw] h-[5vh] px-[0.7vw] rounded-md outline-none text-xl border-2 border-black fonts placeholder-gray-900"
          placeholder="Describe yourself in short"
        />
      </div>
    </div>
  )
}

export default Step1
