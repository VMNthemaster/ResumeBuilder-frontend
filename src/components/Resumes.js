import React, { useEffect } from 'react'
import useState from 'react-usestateref'
import axios from 'axios'
import ShortResumes from './ShortResumes'
import '../assets/css/fonts.css'
import LoadingLogo from '../assets/loading.png'

const Resumes = () => {
  const [message, setMessage] = useState('')
  const [resumeData, setResumeData] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch, getSearch] = useState('')

  const sendRequestToBackend = async () => {
    const res = await axios
      .get('https://resumebuildernodejs.herokuapp.com/api/resumes')
      .catch((err) => {
        return {
          data: err.response.status,
        }
      })

    const data = await res.data
    setLoading(false)
    return data
  }

  useEffect(() => {
    sendRequestToBackend().then((data) => {
      if (data === 500) {
        setMessage('Unable to fetch resumes')
      } else {
        setResumeData(data.resumes)
      }
    })
  }, [])

  const searchResumes = async () => {
    const search = getSearch.current
    const res = await axios
      .post('https://resumebuildernodejs.herokuapp.com/api/resumes', {
        search,
      })
      .catch((err) => {
        return {
          data: err.response.status,
        }
      })

    const data = await res.data
    return data
  }

  const handleChange = (e) => {
    setSearch(e.target.value)
    searchResumes().then((data) => {
      if (data === 500) {
        setMessage('Unable to fetch resumes')
      } else {
        setResumeData(data.resumes)
      }
    })
  }

  return (
    <>
      {loading && (
        <div className="resume-bg min-h-[90vh] flex justify-center items-center">
          <img
            src={LoadingLogo}
            className=" w-[20vw] h-[20vw] rotate"
            alt="Loading, please wait...."
          />
        </div>
      )}

      {!loading && (
        <>
          <div className="resume-bg min-h-[90vh] pb-[5vh] flex flex-col items-center">
            <div className='mt-[3.15vh] shadow-md'>
              <input
                className="fonts px-[0.5vw] py-[0.5vh] h-[6vh] w-[20vw] rounded-md text-xl outline-none border-2 border-gray-400"
                type="text"
                placeholder="Search Resume...."
                name="search"
                value={search}
                onChange={handleChange}
              ></input>
            </div>
            {message && (
              <div className="flex justify-center items-center h-[90vh]">
                <h1>{message}</h1>
              </div>
            )}
            {resumeData &&
              resumeData.map((singleResume, index) => {
                return <ShortResumes key={index} info={singleResume} />
              })}
          </div>
        </>
      )}
    </>
  )
}

export default Resumes
