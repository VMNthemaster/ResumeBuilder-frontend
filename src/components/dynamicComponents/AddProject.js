import React from 'react'

const AddProject = ({ titleName, linkName, descName, handleChange, projectInputs }) => {
  return (
    <>  
      <div className="flex justify-between">
        <input
          type="text"
          onChange={handleChange}
          name={titleName}
          className="w-[25vw] h-[5vh] px-[0.7vw] rounded-md outline-none text-xl border-2 border-black fonts placeholder-gray-900"
          placeholder="Project Title"
          value={projectInputs.titleName}
        />
        <input
          type="text"
          onChange={handleChange}
          name={linkName}
          value={projectInputs.linkName}
          className="w-[25vw] h-[5vh] px-[0.7vw] rounded-md outline-none text-xl border-2 border-black fonts placeholder-gray-900"
          placeholder="Project Link"
        />
      </div>
      <div className="flex justify-between">
        <textarea
          type="text"
          onChange={handleChange}
          name={descName}
          value={projectInputs.descName}
          className="w-[45vw] h-[5vh] px-[0.7vw] rounded-md outline-none text-xl border-2 border-black fonts placeholder-gray-900"
          placeholder="Project Description"
        />
      </div>
    </>
  )
}

export default AddProject
