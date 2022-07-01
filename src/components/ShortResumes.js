import React from 'react'
import '../assets/css/fonts.css'
import { useNavigate } from 'react-router-dom'

const ShortResumes = (props) => {
  const { firstName, lastName, skills } = props.info
  const navigate = useNavigate()

  const handleClick = async () => {
    const resumeId = props.info._id
    navigate(`/resumes/${resumeId}`)
  }

  return (
    <div className="pt-[5vh]">
      <div
        onClick={handleClick}
        className="flex flex-row px-[1vw] py-[1vh] sm:w-[93vw] mx-[2.5vw] md:w-[70vw] md:mx-auto border-2 rounded-lg text-lg md:text-2xl justify-between hover:cursor-pointer bg-slate-50 hover:bg-slate-100 zoom "
      >
        <div className="flex items-center w-[35vw] px-[0.75vw] flex-wrap">
          <h1 className="font-serif text-3xl underline">
            {firstName} {lastName}'s Resume
          </h1>
        </div>
        <div className="flex flex-col sm:w-[50vw] md:w-[33vw] gap-y-2">
          <div className="flex flex-row ">
            {skills[0] && (
              <div className="flex justify-center items-center md:w-[15vw] h-[7.5vh] mx-[1vw] rounded-md bg-slate-500/75">
                <h1 className="fonts text-white">{skills[0]}</h1>
              </div>
            )}
            {skills[1] && (
              <div className="flex justify-center items-center w-[15vw] h-[7.5vh] mx-[1vw] rounded-md bg-slate-500/75">
                <h1 className="fonts text-white">{skills[1]}</h1>
              </div>
            )}
          </div>
          <div className="flex flex-row">
            {skills[2] && (
              <div className="flex justify-center items-center w-[15vw] h-[7.5vh] mx-[1vw] rounded-md bg-slate-500/75">
                <h1 className="fonts text-white">{skills[2]}</h1>
              </div>
            )}
            {skills[2] && (
              <div className="flex justify-center items-center w-[15vw] h-[7.5vh] mx-[1vw] rounded-md bg-slate-500/75">
                <h1 className="fonts text-white">More....</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShortResumes
