import React from 'react'

const AddInterests = ({ interestName, handleChange, interestInputs }) => {
  return (
    <input
      onChange={handleChange}
      type="text"
      name={interestName}
      value={interestInputs.interestName}
      className="w-[14vw] h-[5vh] px-[0.7vw]  rounded-md outline-none text-xl border-2 border-black fonts placeholder-gray-900"
      placeholder="Interest"
    />
  )
}

export default AddInterests
