import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../assets/css/fonts.css'
import CompleteResumeLayout from './CompleteResumeLayout'

const CompleteResume = () => {
  const resumeId = useParams().resumeId
  const [message, setMessage] = useState('')
  const [resumeDetails, setResumeDetails] = useState('')

  const sendRequestToBackend = async () => {
    const res = await axios
      .get(`https://resumebuildernodejs.herokuapp.com/api/resumes/${resumeId}`)
      .catch((err) => {
        return {
          data: err.response.status,
        }
      })

    const data = await res.data
    return data
  }

  useEffect(() => {
    sendRequestToBackend().then((data) => {
      if (data === 500) {
        setMessage('Unable to fetch resume, please try again')
      } else {
        setResumeDetails(data.resume)
      }
    })
    // eslint-disable-next-line
  }, [])

  return (
    <div className="resume-bg min-h-[90vh] py-[5vh]">
      {message && (
        <div className="resume-bg min-h-[90vh]">
          <h1 className="fonts">{message}</h1>
        </div>
      )}
      <div className='flex flex-row w-[60vw] mx-auto'>
        {resumeDetails && (
          <div >
            <CompleteResumeLayout info={resumeDetails} />
          </div>
        )}
      </div> 
      {/* send data to CompleteResumeLayout.js */}
    </div>
  )
}

export default CompleteResume
