import React from 'react'

const AddExperience = ({
  institute,
  position,
  duration,
  desc,
  handleChange,
  experienceInputs,
}) => {
  return (
    <>
      <div className="flex justify-between">
        <input
          onChange={handleChange}
          type="text"
          name={institute}
          value={experienceInputs.institute}
          className="w-[22vw] h-[5vh] px-[0.7vw] rounded-md outline-none text-xl border-2 border-black fonts placeholder-gray-900"
          placeholder="Institute"
        />
        <input
          onChange={handleChange}
          type="text"
          name={position}
          value={experienceInputs.position}
          className="w-[18vw] h-[5vh] px-[0.7vw] rounded-md outline-none text-xl border-2 border-black fonts placeholder-gray-900"
          placeholder="Position"
        />
        <input
          onChange={handleChange}
          type="text"
          name={duration}
          value={experienceInputs.duration}
          className="w-[10vw] h-[5vh] px-[0.7vw] rounded-md outline-none text-xl border-2 border-black fonts placeholder-gray-900"
          placeholder="Duration"
        />
      </div>
      <div className="flex justify-between">
        <textarea
          onChange={handleChange}
          name={desc}
          value={experienceInputs.desc}
          className="w-[45vw] h-[5vh] px-[0.7vw] rounded-md outline-none text-xl border-2 border-black fonts placeholder-gray-900"
          placeholder="Institute Description"
        />
      </div>
    </>
  )
}

export default AddExperience
