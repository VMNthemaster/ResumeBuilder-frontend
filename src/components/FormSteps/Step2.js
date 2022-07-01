import React from 'react'
import '../../assets/css/fonts.css'

const Step2 = ({ value, handleChange, inputs }) => {
  return (
    <div
      className={`${
        value === 2 ? 'visible' : 'hidden'
      } step1 flex flex-col  gap-y-[3vh]`}
    >
      <h1 className="text-center font-bold fonts text-3xl py-[2vh] underline underline-offset-1">
        PERSONAL DETAILS
      </h1>
      <div className="h-[0.35vh] bg-gray-600 w-[30vw] mx-auto"></div>
      <div className="flex justify-between">
        <input
          onChange={handleChange}
          type="text"
          name="phoneNo"
          value={inputs.phoneNo}
          className="w-[25vw] h-[5vh] px-[0.7vw] rounded-md outline-none text-xl border-2 border-black fonts placeholder-gray-900"
          placeholder="Phone Number"
        />
        <input
          onChange={handleChange}
          type="text"
          name="github"
          value={inputs.github}
          className="w-[25vw] h-[5vh] px-[0.7vw] rounded-md outline-none text-xl border-2 border-black fonts placeholder-gray-900"
          placeholder="Github"
        />
      </div>
      <div className="flex justify-between ">
        <input
          onChange={handleChange}
          type="text"
          name="linkedIn"
          value={inputs.linkedIn}
          className="w-[25vw] h-[5vh] px-[0.7vw] rounded-md outline-none text-xl border-2 border-black fonts placeholder-gray-900"
          placeholder="LinkedIn"
        />
        <input
          onChange={handleChange}
          type="text"
          name="twitter"
          value={inputs.twitter}
          className="w-[25vw] h-[5vh] px-[0.7vw] rounded-md outline-none text-xl border-2 border-black fonts placeholder-gray-900"
          placeholder="Twitter"
        />
      </div>
      <div className="flex justify-between">
        <input
          onChange={handleChange}
          type="text"
          name="facebook"
          value={inputs.facebook}
          className="w-[25vw] h-[5vh] px-[0.7vw] rounded-md outline-none text-xl border-2 border-black fonts placeholder-gray-900"
          placeholder="Facebook"
        />
        <input
          onChange={handleChange}
          type="text"
          name="instagram"
          value={inputs.instagram}
          className="w-[25vw] h-[5vh] px-[0.7vw] rounded-md outline-none text-xl border-2 border-black fonts placeholder-gray-900"
          placeholder="Instagram"
        />
      </div>
      <div className="flex justify-between">
        <input
          onChange={handleChange}
          type="text"
          name="location"
          value={inputs.location}
          className="w-[25vw] h-[5vh] px-[0.7vw] rounded-md outline-none text-xl border-2 border-black fonts placeholder-gray-900"
          placeholder="Location"
        />
      </div>
      <div className="h-[0.35vh] bg-gray-600 w-[30vw] mx-auto"></div>
      <div className="flex justify-between">
        <input
          onChange={handleChange}
          type="text"
          name="school"
          value={inputs.school}
          className="w-[25vw] h-[5vh] px-[0.7vw] rounded-md outline-none text-xl border-2 border-black fonts placeholder-gray-900"
          placeholder="School"
        />
      </div>
      <div className="flex justify-between">
        <input
          onChange={handleChange}
          type="text"
          name="schoolFrom"
          value={inputs.schoolFrom}
          className="w-[25vw] h-[5vh] px-[0.7vw] rounded-md outline-none text-xl border-2 border-black fonts placeholder-gray-900"
          placeholder="From (DD/MM/YYYY)"
        />
        <input
          onChange={handleChange}
          type="text"
          name="schoolTo"
          value={inputs.schoolTo}
          className="w-[25vw] h-[5vh] px-[0.7vw] rounded-md outline-none text-xl border-2 border-black fonts placeholder-gray-900"
          placeholder="To (DD/MM/YYYY)"
        />
      </div>
      <div className="h-[0.35vh] bg-gray-600 w-[30vw] mx-auto"></div>
      <div className="flex justify-between">
        <input
          onChange={handleChange}
          type="text"
          name="hsc"
          value={inputs.hsc}
          className="w-[25vw] h-[5vh] px-[0.7vw] rounded-md outline-none text-xl border-2 border-black fonts placeholder-gray-900"
          placeholder="Junior College"
        />
      </div>
      <div className="flex justify-between">
        <input
          onChange={handleChange}
          type="text"
          name="hscFrom"
          value={inputs.hscFrom}
          className="w-[25vw] h-[5vh] px-[0.7vw] rounded-md outline-none text-xl border-2 border-black fonts placeholder-gray-900"
          placeholder="From (DD/MM/YYYY)"
        />
        <input
          onChange={handleChange}
          type="text"
          name="hscTo"
          value={inputs.hscTo}
          className="w-[25vw] h-[5vh] px-[0.7vw] rounded-md outline-none text-xl border-2 border-black fonts placeholder-gray-900"
          placeholder="To (DD/MM/YYYY)"
        />
      </div>
      <div className="h-[0.30vh] bg-gray-600 w-[30vw] mx-auto"></div>
      <div className="flex justify-between">
        <input
          onChange={handleChange}
          type="text"
          value={inputs.college}
          name="college"
          className="w-[25vw] h-[5vh] px-[0.7vw] rounded-md outline-none text-xl border-2 border-black fonts placeholder-gray-900"
          placeholder="College"
        />
      </div>
      <div className="flex justify-between">
        <input
          onChange={handleChange}
          type="text"
          name="collegeFrom"
          value={inputs.collegeFrom}
          className="w-[25vw] h-[5vh] px-[0.7vw] rounded-md outline-none text-xl border-2 border-black fonts placeholder-gray-900"
          placeholder="From (DD/MM/YYYY)"
        />
        <input
          onChange={handleChange}
          type="text"
          name="collegeTo"
          value={inputs.collegeTo}
          className="w-[25vw] h-[5vh] px-[0.7vw] rounded-md outline-none text-xl border-2 border-black fonts placeholder-gray-900"
          placeholder="To (DD/MM/YYYY)"
        />
      </div>
    </div>
  )
}

export default Step2
