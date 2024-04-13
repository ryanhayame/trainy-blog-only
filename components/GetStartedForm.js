import React, { useState } from 'react'

//import { useNavigate } from "react-router-dom";

const GetStartedForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [jobTitle, setJobTitle] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [checkbox1, setCheckbox1] = useState(false)
  const [checkbox2, setCheckbox2] = useState(false)

  const [error, setError] = useState({})

  const validEmail = (email) => {
    //eslint-disable-next-line
    var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (!email) {
      setError({ type: 'email', msg: 'An email is required' })
      return false
    } else if (!email.match(emailFormat)) {
      setError({ type: 'email', msg: 'Email invalid' })
      return false
    }
    return true
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    // Pre-server-side validation:
    if (!validEmail(email)) {
      return
    }

    // POST API request to mongoDB
    const userData = {
      firstName: firstName,
      email: email.toLowerCase(),
    }

    const response = null
    //const response = await register(userData)

    // Post-server-side validation:
    if (response.status === 'ERROR') {
      setError({ type: response.type, msg: response.msg })
      return
    } else if (response.status === 'DEFAULT ERROR') {
      setError({ type: 'other', msg: 'DEFAULT ERROR: Please contact customer support' })
      return
    }

    // if everything was successful
    //navigate('/')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 flex w-full flex-col items-center justify-center gap-6"
    >
      <div className="flex w-5/6 max-w-4xl flex-col justify-center">
        <label className="mb-1 text-left text-sm font-medium text-gray-800 dark:text-gray-300">
          First Name:
        </label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full max-w-4xl rounded border-slate-400 bg-slate-100 hover:border-gray-700 focus:border-gray-700 focus:ring-gray-700 dark:border-gray-600 dark:bg-gray-800"
        ></input>
      </div>
      <div className="flex w-5/6 max-w-4xl flex-col justify-center">
        <label className="mb-1 text-left text-sm font-medium text-gray-800  dark:text-gray-300">
          Last Name:
        </label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="w-full max-w-4xl rounded border-slate-400 bg-slate-100 hover:border-gray-700 focus:border-gray-700 focus:ring-gray-700  dark:border-gray-600 dark:bg-gray-800"
        ></input>
      </div>
      <div className="flex w-5/6 max-w-4xl flex-col justify-center">
        <label className="mb-1 text-left text-sm font-medium text-gray-800  dark:text-gray-300">
          Email:
        </label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full max-w-4xl rounded border-slate-400 bg-slate-100 hover:border-gray-700 focus:border-gray-700 focus:ring-gray-700  dark:border-gray-600 dark:bg-gray-800"
        ></input>
      </div>
      <div className="flex w-5/6 max-w-4xl flex-col justify-center">
        <label className="mb-1 text-left text-sm font-medium text-gray-800  dark:text-gray-300">
          Company Name:
        </label>
        <input
          type="text"
          id="companyName"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          className="w-full max-w-4xl rounded border-slate-400 bg-slate-100 hover:border-gray-700 focus:border-gray-700 focus:ring-gray-700  dark:border-gray-600 dark:bg-gray-800"
        ></input>
      </div>
      <div className="flex w-5/6 max-w-4xl flex-col justify-center">
        <label className="mb-1 text-left text-sm font-medium text-gray-800  dark:text-gray-300">
          Job Title:
        </label>
        <input
          type="text"
          id="jobTitle"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          className="w-full max-w-4xl rounded border-slate-400 bg-slate-100 hover:border-gray-700 focus:border-gray-700 focus:ring-gray-700  dark:border-gray-600 dark:bg-gray-800"
        ></input>
      </div>
      <div className="flex w-5/6 max-w-4xl flex-col justify-center">
        <label className="mb-1 text-left text-sm font-medium text-gray-800  dark:text-gray-300">
          Anything else we should know? (cloud vs. on-prem, number of nodes, model size, etc.)
        </label>
        <input
          type="text"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="w-full max-w-4xl rounded border-slate-400 bg-slate-100 hover:border-gray-700 focus:border-gray-700 focus:ring-gray-700  dark:border-gray-600 dark:bg-gray-800"
        ></input>
      </div>
      <div className="flex w-5/6 max-w-4xl items-center justify-center">
        <input
          type="checkbox"
          id="checkbox1"
          value={checkbox1}
          onChange={() => setCheckbox1((curr) => !curr)}
          className={`h-4 w-4 rounded border-slate-400 bg-slate-100 text-logomid hover:border-gray-700 focus:border-gray-700 focus:ring-gray-700 dark:border-gray-600 dark:bg-gray-800 dark:checked:bg-logomid`}
        ></input>
        <label className="ml-2 py-4 text-sm font-medium leading-4 text-gray-900 dark:text-gray-300">
          Interested in Trainy Platform
        </label>
        <input
          type="checkbox"
          id="checkbox2"
          value={checkbox2}
          onChange={() => setCheckbox2((curr) => !curr)}
          className={`ml-4 h-4 w-4 rounded border-slate-400 bg-slate-100 text-logomid hover:border-gray-700 focus:border-gray-700 focus:ring-gray-700 dark:border-gray-600 dark:bg-gray-800 dark:checked:bg-logomid xs:ml-10`}
        ></input>
        <label className="ml-2 py-4 text-sm font-medium leading-4 text-gray-900 dark:text-gray-300">
          Interested in Performance Tuning Consultation
        </label>
      </div>
      <button
        type="submit"
        className="rounded-lg bg-black px-5 py-3 text-center text-base font-medium text-white drop-shadow-xl hover:bg-logomid dark:bg-logomid dark:hover:bg-logodark2"
      >
        Submit
      </button>
    </form>
  )
}

export default GetStartedForm
