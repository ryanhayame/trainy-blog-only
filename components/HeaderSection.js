import React, { useState } from 'react'

const HeaderSection = (props) => {
  return (
    <div className="bg-white flex justify-center w-full py-12 min-h-small md:py-24 xs:h-screen items-center">
      <div className="flex flex-col items-center justify-center justify-items-center h-screen pt-0 xs:py-24 mx-2">
        <div className="flex flex-col items-center justify-center max-w-4xl">
          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="font-extrabold text-gray-900 text-5xl md:text-6xl lg:text-7xl text-center"
          >
            Unlock your model
          </h1>
          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="font-extrabold text-gray-900 text-5xl md:text-6xl lg:text-7xl text-center"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-logolight from-logodark">
              performance
            </span>{' '}
            potential
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="text-lg text-gray-700 lg:text-2xl max-w-2xl text-center mx-4 mt-12"
          >
            We help ML engineers training large models isolate performance bottlenecks and boost
            training speed.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center mt-12">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Trainy-ai/nodify"
            data-aos="fade-up"
            data-aos-delay="150"
            className="inline-flex items-center cursor-pointer justify-center px-5 py-3 text-base font-medium text-center text-white bg-black drop-shadow-xl rounded-lg hover:bg-logomid"
          >
            Learn more
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        <div className="container flex-col items-center justify-center h-1/5 mt-16 xs:mt-44 mx-2 mb-8">
          <div className="flex flex-col items-center justify-center">
            <h5 data-aos="fade-up" data-aos-delay="300" className="text-xl text-black font-medium">
              Backed By
            </h5>
            <div className="flex items-center justify-center">
              <img
                data-aos="fade-up"
                data-aos-delay="350"
                src="yc.svg"
                className="h-10 mx-4 mt-2"
              />
              {/*<img data-aos="fade-up" data-aos-delay="350" src="up.svg" className="h-16 mx-4"/>*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderSection
