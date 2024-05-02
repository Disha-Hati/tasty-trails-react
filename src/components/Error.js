import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const err=useRouteError();
    console.log(err)
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 ">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-xl w-full text-center">
        <svg
          className="w-20 h-20 text-blue-600 mx-auto mb-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Error {err.status}</h1>
        <p className="text-lg text-gray-800 mb-8">{err.statusText}</p>
        <p className="text-lg text-gray-500 mb-8">⚠️ {err.data}</p>
        <button
          onClick={() => window.location.reload()}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Refresh Page
        </button>
      </div>
    </div>
  )
}

export default Error
