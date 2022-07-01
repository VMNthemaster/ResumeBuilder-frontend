import React from 'react'

const AddLanguages = ({ langName, handleChange, languageInputs }) => {
  return (
    <input
      onChange={handleChange}
      type="text"
      name={langName}
      value={languageInputs.langName}
      className="w-[14vw] h-[5vh] px-[0.7vw] fonts rounded-md outline-none text-xl border-2 border-black placeholder-gray-900"
      placeholder="Language"
    />
  )
}

export default AddLanguages
