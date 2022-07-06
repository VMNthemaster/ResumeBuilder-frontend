import React, { useState } from 'react'
import '../assets/css/fonts.css'
import Logo from '../assets/logo.png'
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLandmark,
  FaLinkedin,
  FaPhoneAlt,
  FaRegCalendarAlt,
  FaRegClock,
  FaTwitter,
} from 'react-icons/fa'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const CompleteResumeLayout = (props) => {
  const navigate = useNavigate()
  const details = props.info
  // const resumeUserId = sessionStorage.getItem('resumeUserId')
  const resumeUserId = useSelector((state) => state.resumeUserId)
  const [isClicked, setIsClicked] = useState(false)

  const collegeTo = new Date(
    new Date(details.collegeTo).getTime()
  ).toLocaleDateString()
  const collegeFrom = new Date(
    new Date(details.collegeFrom).getTime()
  ).toLocaleDateString()
  const schoolTo = new Date(
    new Date(details.schoolTo).getTime()
  ).toLocaleDateString()
  const schoolFrom = new Date(
    new Date(details.schoolFrom).getTime()
  ).toLocaleDateString()
  const hscTo = new Date(new Date(details.hscTo).getTime()).toLocaleDateString()
  const hscFrom = new Date(
    new Date(details.hscFrom).getTime()
  ).toLocaleDateString()

  const handleClick = (url) => {
    const newWindow = window.open(
      'https://' + url,
      '_blank',
      'noopener,noreferrer'
    )
    if (newWindow) newWindow.opener = null
  }

  const sendRequestToBackend = async () => {
    const res = await axios
      .delete(`https://resumebuildernodejs.herokuapp.com/api/resumes/${details._id}`)
      .catch((err) => {
        return {
          data: err.response.status,
        }
      })
    const data = await res.data
    return data
  }

  const handleDelete = async () => {
    sendRequestToBackend().then((data) => {
      if (data === 500) {
        console.log('Internal server error')
        navigate(`/resumes/${details._id}`)
      } else {
        console.log('successfully deleted resume')
        navigate('/resumes')
      }
    })
  }

  return (
    <>
      <div className="flex flex-col relative">
        {details.by === resumeUserId && (
          <>
            <div
              onClick={() => {
                setIsClicked((prev) => !prev)
              }}
              className="flex flex-col absolute -top-[1vh] right-[0.75vw] cursor-pointer"
            >
              <h1 className="text-white text-xl font-bold h-[0.5vw]">.</h1>
              <h1 className="text-white text-xl font-bold h-[0.5vw]">.</h1>
              <h1 className="text-white text-xl font-bold h-[0.5vw]">.</h1>
            </div>
            <h1
              onClick={handleDelete}
              className={`${
                isClicked ? '' : 'displayNone'
              } text-black bg-gray-100  px-[0.3vw] py-[0.3vh] rounded-sm text-xl absolute top-[0.75vh] -right-[8.75vw] cursor-pointer fonts`}
            >
              Delete Resume
            </h1>
          </>
        )}
        {/*  */}
        <div className="resume-header flex justify-between pt-[4.5vh] pb-[1.5vh] px-[2vw]  bg-[#31334e]">
          <div>
            <h1 className="text-4xl mb-[0.5vh]  text-white new-fonts">
              {details.firstName} {details.lastName}
            </h1>
            <h1 className="text-3xl mb-[0.5vh] new-fonts text-[#2f897e]">
              {details.profession}
            </h1>
            <h1 className="text-xl max-w-[30vw] text-white font-thin new-fonts">
              {details.shortdesc}
            </h1>
          </div>

          <div className="max-w-[10vw]  max-h-[10vw] mb-[0.5vh]">
            <img className="rounded-md" src={Logo} alt="img will come here" />
          </div>
        </div>
        {/*  */}
        <div className="personal-details flex flex-col  w-[60vw] py-[1.5vh] px-[2vw] bg-[#2a343f]">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row justify-start items-center gap-x-[0.5vw]">
              <h1 className="text-white new-fonts cursor-text">
                <FaEnvelope />
              </h1>
              <h1 className="text-white new-fonts cursor-text">
                {details.email}
              </h1>
            </div>
            <div className="flex flex-row justify-start items-center gap-x-[0.5vw]">
              <h1 className="text-white new-fonts cursor-text">
                <FaPhoneAlt />
              </h1>
              <h1 className="text-white new-fonts cursor-text">
                {details.phoneNo}
              </h1>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row justify-start items-center gap-x-[0.5vw]">
              <h1 className="text-white new-fonts cursor-text">
                <FaGithub />
              </h1>
              <h1 className="text-white new-fonts cursor-text">
                {details.github}
              </h1>
            </div>
            <div className="flex flex-row justify-start items-center gap-x-[0.5vw]">
              <h1 className="text-white new-fonts cursor-text">
                <FaLinkedin />
              </h1>
              <h1 className="text-white new-fonts cursor-text">
                {details.linkedIn}
              </h1>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row justify-start items-center gap-x-[0.5vw]">
              <h1 className="text-white new-fonts cursor-text">
                <FaTwitter />
              </h1>
              <h1 className="text-white new-fonts cursor-text">
                {details.twitter}
              </h1>
            </div>
            <div className="flex flex-row justify-start items-center gap-x-[0.5vw]">
              <h1 className="text-white new-fonts cursor-text">
                <FaFacebook />
              </h1>
              <h1 className="text-white new-fonts cursor-text">
                {details.facebook}
              </h1>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row justify-start items-center gap-x-[0.5vw]">
              <h1 className="text-white new-fonts cursor-text">
                <FaInstagram />
              </h1>
              <h1 className="text-white new-fonts cursor-text">
                {details.instagram}
              </h1>
            </div>
            <div className="flex flex-row justify-start items-center gap-x-[0.5vw]">
              <h1 className="text-white new-fonts cursor-text">
                <FaLandmark />
              </h1>
              <h1 className="text-white new-fonts cursor-text">
                {details.location}
              </h1>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="technical-details flex bg-gray-100 pb-[5vh]">
          <div className="left-half px-[2vw] w-[30vw]">
            <div className="education flex flex-col py-[3vh] gap-y-[2vh]">
              <div className="">
                <h1 className="text-3xl underline underline-offset-4 new-fonts text-[#2f897e] font-semibold">
                  EDUCATION
                </h1>
              </div>
              <div>
                <h1 className="text-3xl font-bold fonts">College</h1>
                <h1 className="text-2xl fonts">{details.college}</h1>
                <div className="flex flex-row justify-start items-center gap-x-[0.5vw]">
                  <h1>
                    <FaRegCalendarAlt />
                  </h1>
                  <h1 className="text-xl italic fonts">
                    {collegeFrom} - {collegeTo}
                  </h1>
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-bold fonts">HSC/12th</h1>
                <h1 className="text-2xl fonts">{details.hsc}</h1>
                <div className="flex flex-row justify-start items-center gap-x-[0.5vw]">
                  <h1 className="">
                    <FaRegCalendarAlt />
                  </h1>
                  <h1 className="text-xl italic fonts">
                    {hscFrom} - {hscTo}
                  </h1>
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-bold fonts">School</h1>
                <h1 className="text-2xl fonts">{details.school}</h1>
                <div className="flex flex-row justify-start items-center gap-x-[0.5vw]">
                  <h1 className="">
                    <FaRegCalendarAlt />
                  </h1>
                  <h1 className="text-xl italic fonts">
                    {schoolFrom} - {schoolTo}
                  </h1>
                </div>
              </div>
            </div>
            <div className="experience flex flex-col py-[3vh] gap-y-[2vh]">
              <div className="">
                <h1 className="text-3xl underline underline-offset-4 new-fonts text-[#2f897e] font-semibold">
                  EXPERIENCE
                </h1>
              </div>
              <div>
                {details.experience.map((exp, index) => {
                  return (
                    <div
                      key={index}
                      className="mb-[2vh] flex flex-col flex-wrap"
                    >
                      <div className="flex flex-row justify-between">
                        <h1 className="text-3xl fonts font-bold">
                          {exp.institute}
                        </h1>
                        <div className="flex flex-row justify-start items-center gap-x-[0.5vw]">
                          <h1>
                            <FaRegClock />
                          </h1>
                          <h1 className="text-2xl fonts italic pr-[0.5vw]">
                            {exp.duration}
                          </h1>
                        </div>
                      </div>
                      <h1 className="text-2xl fonts">{exp.position}</h1>
                      <h1 className="text-xl fonts">{exp.description}</h1>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="right-half px-[2vw] w-[30vw]">
            <div className="skills flex flex-col py-[3vh] gap-y-[2vh]">
              <div>
                <h1 className="text-3xl underline underline-offset-4 new-fonts text-[#2f897e] font-semibold">
                  SKILLS
                </h1>
              </div>
              <div className="flex pt-[1vh] flex-row gap-x-2 gap-y-2 flex-wrap">
                {details.skills.map((skill, index) => {
                  return (
                    <div
                      key={index}
                      className="w-fit px-[1vw] py-[0.75vh] rounded-md bg-gray-600/75"
                    >
                      <h1 className="text-lg font-medium text-white new-fonts cursor-default">
                        {skill}
                      </h1>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="personal-projects flex flex-col py-[3vh] gap-y-[2vh]">
              <div>
                <h1 className="text-3xl underline underline-offset-4 new-fonts text-[#2f897e] font-semibold">
                  PERSONAL PROJECTS
                </h1>
              </div>
              <div>
                {details.projects.map((project, index) => {
                  return (
                    <div
                      key={index}
                      className="mb-[2vh] flex flex-col flex-wrap"
                    >
                      <h1 className="text-3xl font-bold fonts">
                        {project.title}
                      </h1>
                      <h1
                        onClick={() => handleClick(project.link)}
                        className="text-2xl cursor-pointer underline underline-offset-1 fonts italic text-violet-800 font-semibold"
                      >
                        {project.link}
                      </h1>
                      <h1 className="text-2xl fonts">{project.description}</h1>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="languages flex flex-col py-[3vh] gap-y-[2vh]">
              <div>
                <h1 className="text-3xl underline underline-offset-4 new-fonts text-[#2f897e] font-semibold">
                  LANGUAGES
                </h1>
              </div>
              <div className="flex pt-[1vh] flex-row gap-x-2 gap-y-2 flex-wrap">
                {details.languages.map((language, index) => {
                  return (
                    <div
                      key={index}
                      className="flex w-fit px-[1.25vw] py-[0.7vh] border-2 border-gray-500 rounded-md justify-center"
                    >
                      <h1 className="new-fonts font-medium text-2xl cursor-default">
                        {language}
                      </h1>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="interests flex flex-col py-[3vh] gap-y-[2vh]">
              <div>
                <h1 className="text-3xl underline underline-offset-4 new-fonts text-[#2f897e] font-semibold">
                  INTERESTS
                </h1>
              </div>
              <div className="flex pt-[1vh] flex-row gap-x-2 gap-y-2 flex-wrap">
                {details.interests.map((interest, index) => {
                  return (
                    <div
                      key={index}
                      className="w-fit px-[1.25vw] py-[0.7vh] border-2 border-gray-500 rounded-md"
                    >
                      <h1 className="new-fonts font-medium text-2xl cursor-default">
                        {interest}
                      </h1>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </>
  )
}
// learn how to add local image in mongo db and then start with create resume page
export default CompleteResumeLayout
