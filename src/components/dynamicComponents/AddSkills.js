import React from 'react'

const AddSkills = ({ skillName, handleChange, skillsInputs }) => {
  return (
    <input
      onChange={handleChange}
      type="text"
      name={skillName}
      value={skillsInputs.skillName}
      className="w-[14vw] h-[5vh] px-[0.7vw] rounded-md outline-none text-xl border-2 border-black fonts placeholder-gray-900"
      placeholder="Skill"
    />
  )
}

export default AddSkills
