import React, { useEffect } from 'react'
import useState from 'react-usestateref'
import '../../assets/css/fonts.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const FormButtons = ({
  // login first then only create resume will work
  value,
  setValue,
  inputs,
  projectInputs,
  experienceInputs,
  skillsInputs,
  interestInputs,
  languageInputs,
}) => {
  const resumeUserId = useSelector((state) => state.resumeUserId)
  const navigate = useNavigate()
  const [flag, setFlag] = useState(0)
  const [projectsArray, setProjectsArray, getProjectsArray] = useState([])
  const [expArray, setExpArray, getExpArray] = useState([])
  const [skillsArray, setSkillsArray, getSkillsArray] = useState([])
  const [interestsArray, setInterestsArray, getInterestsArray] = useState([])
  const [languageArray, setLanguageArray, getLanguageArray] = useState([])

  useEffect(() => {
    const projectInputsLen = Object.keys(projectInputs).length / 3
    const experienceInputsLen = Object.keys(experienceInputs).length / 4
    const skillsInputsLen = Object.keys(skillsInputs).length
    const interestInputsLen = Object.keys(interestInputs).length
    const languageInputsLen = Object.keys(languageInputs).length

    if (flag === 1) {
      let prevProjectsArray = [...projectsArray]
      for (let i = 0; i < projectInputsLen; i++) {
        let objTitle = Object.keys(projectInputs).filter(
          (key) => key === `projectTitle${i + 1}`
        )[0]
        let title = projectInputs[objTitle]
        let objLink = Object.keys(projectInputs).filter(
          (key) => key === `projectLink${i + 1}`
        )[0]
        let link = projectInputs[objLink]
        let objDescription = Object.keys(projectInputs).filter(
          (key) => key === `projectDescription${i + 1}`
        )[0]
        let description = projectInputs[objDescription]

        prevProjectsArray.push({
          title,
          link,
          description,
        })
      }
      setProjectsArray(prevProjectsArray)

      let prevExpArray = [...expArray]
      for (let i = 0; i < experienceInputsLen; i++) {
        let objInstitute = Object.keys(experienceInputs).filter(
          (key) => key === `expInstitute${i + 1}`
        )[0]
        let institute = experienceInputs[objInstitute]
        let objPosition = Object.keys(experienceInputs).filter(
          (key) => key === `expPosition${i + 1}`
        )[0]
        let position = experienceInputs[objPosition]
        let objDuration = Object.keys(experienceInputs).filter(
          (key) => key === `expDuration${i + 1}`
        )[0]
        let duration = experienceInputs[objDuration]
        let objDesc = Object.keys(experienceInputs).filter(
          (key) => key === `expDesc${i + 1}`
        )[0]
        let description = experienceInputs[objDesc]

        prevExpArray.push({
          institute,
          position,
          duration,
          description,
        })
      }
      setExpArray(prevExpArray)

      let prevSkillsArray = [...skillsArray]
      for (let i = 0; i < skillsInputsLen; i++) {
        let objSkill = Object.keys(skillsInputs).filter(
          (key) => key === `skill${i + 1}`
        )[0]
        let stringSkill = skillsInputs[objSkill]
        prevSkillsArray.push(stringSkill)
      }
      setSkillsArray(prevSkillsArray)

      let prevInterestsArray = [...interestsArray]
      for (let i = 0; i < interestInputsLen; i++) {
        let objInterest = Object.keys(interestInputs).filter(
          (key) => key === `interest${i + 1}`
        )[0]
        let stringInterest = interestInputs[objInterest]
        prevInterestsArray.push(stringInterest)
      }
      setInterestsArray(prevInterestsArray)

      let prevLanguageArray = [...languageArray]
      for (let i = 0; i < languageInputsLen; i++) {
        let objLang = Object.keys(languageInputs).filter(
          (key) => key === `language${i + 1}`
        )[0]
        let stringLang = languageInputs[objLang]
        prevLanguageArray.push(stringLang)
      }
      setLanguageArray(prevLanguageArray)
    }
  }, [flag]) // eslint-disable-line react-hooks/exhaustive-deps

  const combineData = async () => {
    if (flag === 1) {
      const projects = getProjectsArray.current
      const experience = getExpArray.current
      const skills = getSkillsArray.current
      const interests = getInterestsArray.current
      const languages = getLanguageArray.current
      const res = await axios
        .post('http://localhost:5000/api/resumes/create', {
          // by: sessionStorage.getItem('resumeUserId'),
          by: resumeUserId,
          projects,
          experience,
          skills,
          interests,
          languages,
          ...inputs,
        })
        .catch((err) => {
          return {
            data: err.response.status,
          }
        })

      const data = await res.data
      return data
    }
  }

  const handleSubmit = (e) => {
    setFlag(1)
  }

  useEffect(() => {
    if (flag === 1) {
      combineData().then((data) => {
        if (data === 500) {
          console.log('internal Server Error')
        } else {
          navigate(`/resumes/${data.newResume._id}`)
        }
      })
    }
    // eslint-disable-next-line
  }, [flag])

  return (
    <div className="pt-[3vh]">
      <div className="flex flex-row-reverse justify-between">
        <div>
          <div className="flex justify-end">
            <div
              onClick={handleSubmit}
              className={`${
                value === 3 ? 'visible' : 'displayNone'
              } flex justify-center zoom-reverse`}
            >
              <button
                type="button"
                className={`fonts w-[10vw] rounded-md h-[5vh] text-2xl bg-gradient-to-r from-blue-400 to-blue-500 hover:bg-gradient-to-l text-black border-2 border-violet-700`}
              >
                Submit
              </button>
            </div>
          </div>
          <div
            className={`${
              value === 3 ? 'displayNone' : 'visible'
            } flex justify-center zoom-reverse`}
          >
            <button
              type="button"
              className={`fonts w-[10vw] rounded-md h-[5vh] text-2xl bg-gradient-to-r from-blue-400 to-blue-500 hover:bg-gradient-to-l text-black border-2 border-violet-700`}
              onClick={() => setValue((prevValue) => prevValue + 1)}
            >
              Next
            </button>
          </div>
        </div>
        <div
          className={`${
            value === 1 ? 'displayNone' : 'visible'
          } flex justify-center zoom-reverse`}
        >
          <button
            type="button"
            className={`fonts w-[10vw] rounded-md h-[5vh] text-2xl bg-gradient-to-r from-blue-400 to-blue-500 hover:bg-gradient-to-l text-black border-2 border-violet-700`}
            onClick={() => setValue((prevValue) => prevValue - 1)}
          >
            Prev
          </button>
        </div>
      </div>
    </div>
  )
}

export default FormButtons
