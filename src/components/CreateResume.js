import React, { useState } from 'react'
import '../assets/css/fonts.css'
import Step1 from './FormSteps/Step1'
import Step2 from './FormSteps/Step2'
import Step3 from './FormSteps/Step3'

const CreateResume = () => {
  const [value, setValue] = useState(1)
  const [numOfNewProjects, setNumOfNewProjects] = useState(0)
  const [newProjects, setNewProjects] = useState([])
  const [numOfNewExp, setNumOfNewExp] = useState(0)
  const [newExp, setNewExp] = useState([])
  const [numOfNewSkills, setNumOfNewSkills] = useState(0)
  const [newSkills, setNewSkills] = useState([])
  const [numOfNewInterests, setNumOfNewInterests] = useState(0)
  const [newInterests, setNewInterests] = useState([])
  const [numOfNewLanguages, setNumOfNewLanguages] = useState(0)
  const [newLanguages, setnewLanguages] = useState([])

  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    email: '',
    profession: '',
    shortdesc: '',
    phoneNo: '',
    github: '',
    linkedIn: '',
    twitter: '',
    facebook: '',
    instagram: '',
    location: '',
    school: '',
    schoolFrom: '',
    schoolTo: '',
    hsc: '',
    hscFrom: '',
    hscTo: '',
    college: '',
    collegeFrom: '',
    collegeTo: '',
  })

  const childPropsStep3 = {
    value,
    setValue,
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
  }

  

  const handleChange = (e) => {
    setInputs((prevInputs) => {
      return {
        ...prevInputs,
        [e.target.name]: e.target.value,
      }
    })
  }

  return (
    <div className="resume-bg min-h-[90vh]">
      <div className="flex flex-col w-[55vw] mx-auto py-[5vh] ">
        <div className="border-2 border-black rounded-md flex flex-col py-[3vh] px-[2vw] bg-amber-50 shadow-xl">
          <form >
            <Step1 value={value} handleChange={handleChange} inputs={inputs} />
            <Step2 value={value} handleChange={handleChange} inputs={inputs} />
            <Step3 childProps={childPropsStep3} />
            <button className='displayNone' type="button"></button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateResume
