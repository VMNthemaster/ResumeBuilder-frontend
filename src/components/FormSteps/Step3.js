import React, { useState } from 'react'
import '../../assets/css/fonts.css'
import AddProject from '../dynamicComponents/AddProject'
import AddExperience from '../dynamicComponents/AddExperience'
import AddSkills from '../dynamicComponents/AddSkills'
import AddInterests from '../dynamicComponents/AddInterests'
import AddLanguages from '../dynamicComponents/AddLanguages'
import FormButtons from './FormButtons'

const Step3 = (props) => {
  const {
    value,
    numOfNewProjects,
    setNumOfNewProjects,
    newProjects,
    setNewProjects,
    numOfNewExp,
    setNumOfNewExp,
    newExp,
    setNewExp,
    numOfNewSkills,
    setNumOfNewSkills,
    newSkills,
    setNewSkills,
    numOfNewInterests,
    setNumOfNewInterests,
    newInterests,
    setNewInterests,
    numOfNewLanguages,
    setNumOfNewLanguages,
    newLanguages,
    setnewLanguages,
    inputs,
    setValue,
  } = props.childProps

  const addProject = () => {
    setNumOfNewProjects((prev) => prev + 1)
    let prevProjects = [...newProjects]
    prevProjects.push(
      <AddProject
        titleName={`projectTitle${numOfNewProjects + 2}`}
        linkName={`projectLink${numOfNewProjects + 2}`}
        descName={`projectDescription${numOfNewProjects + 2}`}
        handleChange={handleProjectChange}
        projectInputs={projectInputs}
      />
    )
    setNewProjects(prevProjects)
  }

  const addExperirence = () => {
    setNumOfNewExp((prev) => prev + 1)
    let prevExp = [...newExp]
    prevExp.push(
      <AddExperience
        institute={`expInstitute${numOfNewExp + 2}`}
        position={`expPosition${numOfNewExp + 2}`}
        duration={`expDuration${numOfNewExp + 2}`}
        desc={`expDesc${numOfNewExp + 2}`}
        handleChange={handleExpChange}
        experienceInputs={experienceInputs}
      />
    )
    setNewExp(prevExp)
  }

  const addSkill = () => {
    setNumOfNewSkills((prev) => prev + 1)
    let prevSkills = [...newSkills]
    prevSkills.push(
      <AddSkills
        skillName={`skill${numOfNewSkills + 2}`}
        handleChange={handleSkillsChange}
        skillsInputs={skillsInputs}
      />
    )
    setNewSkills(prevSkills)
  }

  const addInterests = () => {
    setNumOfNewInterests((prev) => prev + 1)
    let prevInterests = [...newInterests]
    prevInterests.push(
      <AddInterests
        interestName={`interest${numOfNewInterests + 2}`}
        handleChange={handleInterestChange}
        interestInputs={interestInputs}
      />
    )
    setNewInterests(prevInterests)
  }

  const addLanguages = () => {
    setNumOfNewLanguages((prev) => prev + 1)
    let prevLang = [...newLanguages]
    prevLang.push(
      <AddLanguages
        langName={`language${numOfNewLanguages + 2}`}
        handleChange={handleLangChange}
        languageInputs={languageInputs}
      />
    )
    setnewLanguages(prevLang)
  }

  //

  const [projectInputs, setProjectInputs] = useState({
    projectTitle1: '',
    projectLink1: '',
    projectDescription1: '',
  })

  const handleProjectChange = (e) => {
    setProjectInputs((prevValues) => {
      return {
        ...prevValues,
        [e.target.name]: e.target.value,
      }
    })
  }

  const [experienceInputs, setExperienceInputs] = useState({
    expInstitute1: '',
    expPosition1: '',
    expDuration1: '',
    expDesc1: '',
  })

  const handleExpChange = (e) => {
    setExperienceInputs((prevValues) => {
      return {
        ...prevValues,
        [e.target.name]: e.target.value,
      }
    })
  }

  const [skillsInputs, setSkillsInputs] = useState({
    skill1: '',
  })

  const handleSkillsChange = (e) => {
    setSkillsInputs((prevValues) => {
      return {
        ...prevValues,
        [e.target.name]: e.target.value,
      }
    })
  }

  const [interestInputs, setInterestInputs] = useState({
    interest1: '',
  })

  const handleInterestChange = (e) => {
    setInterestInputs((prevValues) => {
      return {
        ...prevValues,
        [e.target.name]: e.target.value,
      }
    })
  }

  const [languageInputs, setLanguageInputs] = useState({
    language1: '',
  })

  const handleLangChange = (e) => {
    setLanguageInputs((prevValues) => {
      return {
        ...prevValues,
        [e.target.name]: e.target.value,
      }
    })
  }


  return (
    <>
      <div
        className={`${
          value === 3 ? 'visible' : 'hidden'
        } step1 flex flex-col  gap-y-[3vh]`}
      >
        <h1 className="text-center font-bold fonts text-3xl py-[2vh] underline underline-offset-1">
          TECHNICAL DETAILS
        </h1>
        <div className="h-[0.35vh] bg-gray-600 w-[30vw] mx-auto"></div>
        <div className="flex justify-between">
          <input
            onChange={handleProjectChange}
            name="projectTitle1"
            value={projectInputs.projectTitle1}
            type="text"
            className="w-[25vw] h-[5vh] px-[0.7vw] rounded-md outline-none text-xl border-2 border-black fonts placeholder-gray-900"
            placeholder="Project Title"
          />
          <input
            onChange={handleProjectChange}
            name="projectLink1"
            value={projectInputs.projectLink1}
            type="text"
            className="w-[25vw] h-[5vh] px-[0.7vw] rounded-md outline-none text-xl border-2 border-black fonts placeholder-gray-900"
            placeholder="Project Link"
          />
        </div>
        <div className="flex justify-between">
          <textarea
            onChange={handleProjectChange}
            name="projectDescription1"
            value={projectInputs.projectDescription1}
            className="w-[45vw] h-[5vh] px-[0.7vw] rounded-md outline-none text-xl border-2 border-black fonts placeholder-gray-900"
            placeholder="Project Description"
          />
          <div
            onClick={() => {
              addProject()
            }}
            className={`w-[3vw] h-[4vh] border-2 border-black flex flex-row justify-center items-center pb-[0.5vh] rounded-md cursor-pointer`}
          >
            <h1 className="text-2xl">+</h1>
          </div>
        </div>
        {newProjects.length > 0 &&
          newProjects.map((project, index) => {
            return (
              <div key={index} className="flex flex-col gap-y-[3vh]">
                {project}
              </div>
            )
          })}
        {/*  */}
        <div className="h-[0.35vh] bg-gray-600 w-[30vw] mx-auto"></div>
        <div className="flex justify-between">
          <input
            onChange={handleExpChange}
            name="expInstitute1"
            value={experienceInputs.expInstitute1}
            type="text"
            className="w-[22vw] h-[5vh] px-[0.7vw] rounded-md outline-none text-xl border-2 border-black fonts placeholder-gray-900"
            placeholder="Institute"
          />
          <input
            onChange={handleExpChange}
            name="expPosition1"
            value={experienceInputs.expPosition1}
            type="text"
            className="w-[18vw] h-[5vh] px-[0.7vw] rounded-md outline-none text-xl border-2 border-black fonts placeholder-gray-900"
            placeholder="Position"
          />
          <input
            onChange={handleExpChange}
            name="expDuration1"
            value={experienceInputs.expDuration1}
            type="text"
            className="w-[10vw] h-[5vh] px-[0.7vw] rounded-md outline-none text-xl border-2 border-black fonts placeholder-gray-900"
            placeholder="Duration"
          />
        </div>
        <div className="flex justify-between">
          <textarea
            onChange={handleExpChange}
            name="expDesc1"
            value={experienceInputs.expDesc1}
            className="w-[45vw] h-[5vh] px-[0.7vw] rounded-md outline-none text-xl border-2 border-black fonts placeholder-gray-900"
            placeholder="Institute Description"
          />
          <div
            onClick={() => {
              addExperirence()
            }}
            className={`w-[3vw] h-[4vh] border-2 border-black flex flex-row justify-center items-center pb-[0.5vh] rounded-md cursor-pointer`}
          >
            <h1 className="text-2xl">+</h1>
          </div>
        </div>
        {newExp.length > 0 &&
          newExp.map((exp, index) => {
            return (
              <div key={index} className="flex flex-col gap-y-[3vh]">
                {exp}
              </div>
            )
          })}
        {/*  */}
        <div className="h-[0.35vh] bg-gray-600 w-[30vw] mx-auto"></div>
        <div className="flex  flex-wrap items-center w-[51vw] gap-y-[3vh] justify-start gap-x-[2vw]">
          <input
            onChange={handleSkillsChange}
            name="skill1"
            value={skillsInputs.skill1}
            type="text"
            className="w-[14vw] h-[5vh] px-[0.7vw]  rounded-md outline-none text-xl border-2 border-black fonts placeholder-gray-900"
            placeholder="Skill"
          />
          {newSkills.length > 0 &&
            newSkills.map((skill, index) => {
              return <div key={index}>{skill}</div>
            })}
          <div
            onClick={() => {
              addSkill()
            }}
            className={`w-[3vw] mr-auto h-[4vh] border-2 border-black flex flex-row justify-center items-center pb-[0.5vh] rounded-md cursor-pointer`}
          >
            <h1 className="text-2xl">+</h1>
          </div>
        </div>
        {/*  */}
        <div className="flex flex-wrap items-center w-[51vw] gap-y-[3vh] justify-start gap-x-[2vw]">
          <input
            onChange={handleInterestChange}
            name="interest1"
            value={interestInputs.interest1}
            type="text"
            className="w-[14vw] h-[5vh]  px-[0.7vw]  rounded-md outline-none text-xl border-2 border-black fonts placeholder-gray-900"
            placeholder="Interest"
          />
          {newInterests.length > 0 &&
            newInterests.map((interest, index) => {
              return <div key={index}>{interest}</div>
            })}
          <div
            onClick={() => {
              addInterests()
            }}
            className={`w-[3vw] mr-auto h-[4vh] border-2 border-black flex flex-row justify-center items-center pb-[0.5vh] rounded-md cursor-pointer`}
          >
            <h1 className="text-2xl">+</h1>
          </div>
        </div>
        <div className="flex  flex-wrap items-center w-[51vw] gap-y-[3vh] justify-start gap-x-[2vw]">
          <input
            onChange={handleLangChange}
            name="language1"
            value={languageInputs.language1}
            required={true}
            type="text"
            className="w-[14vw] h-[5vh]  px-[0.7vw]  rounded-md outline-none text-xl border-2 border-black fonts placeholder-gray-900"
            placeholder="Language"
          />
          {newLanguages.length > 0 &&
            newLanguages.map((lang, index) => {
              return <div key={index}>{lang}</div>
            })}
          <div
            onClick={() => {
              addLanguages()
            }}
            className={`w-[3vw] mr-auto h-[4vh] border-2 border-black flex flex-row justify-center items-center pb-[0.5vh] rounded-md cursor-pointer`}
          >
            <h1 className="text-2xl">+</h1>
          </div>
        </div>
      </div>
      <FormButtons
        value={value}
        setValue={setValue}
        projectInputs={projectInputs}
        experienceInputs={experienceInputs}
        skillsInputs={skillsInputs}
        interestInputs={interestInputs}
        languageInputs={languageInputs}
        inputs={inputs}
      />
    </>
  )
}

export default Step3
