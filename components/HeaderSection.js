import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

const HeaderSection = (props) => {
  const [mounted, setMounted] = useState(false)

  const { theme, setTheme, resolvedTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  return (
    <div className="flex min-h-small w-full items-center justify-center bg-white py-12 dark:bg-gray-900 xs:h-screen md:py-24">
      <div className="mx-2 flex h-screen flex-col items-center justify-center justify-items-center pt-0 xs:py-24">
        <div className="flex max-w-4xl flex-col items-center justify-center">
          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-center text-5xl font-extrabold text-gray-900 dark:text-gray-100 md:text-6xl lg:text-7xl"
          >
            Unlock your model
          </h1>
          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-center text-5xl font-extrabold text-gray-900 dark:text-gray-100 md:text-6xl lg:text-7xl"
          >
            <span className="bg-gradient-to-r from-logodark to-logolight bg-clip-text text-transparent">
              performance
            </span>{' '}
            potential
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="mx-4 mt-12 max-w-2xl text-center text-lg text-gray-700 dark:text-gray-400 lg:text-2xl"
          >
            We help ML engineers training large models isolate performance bottlenecks and boost
            training speed.
          </p>
        </div>
        <div className="mt-12 flex flex-col items-center justify-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Trainy-ai"
            aria-label="Trainy Github"
            data-aos="fade-up"
            data-aos-delay="150"
            className="inline-flex cursor-pointer items-center justify-center rounded-lg bg-black px-5 py-3 text-center text-base font-medium text-white drop-shadow-xl hover:bg-logomid dark:bg-logomid dark:hover:bg-logodark"
          >
            Learn more
            <svg
              className="-mr-1 ml-2 h-5 w-5"
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
        <div className="container mx-2 mb-8 mt-16 h-1/5 flex-col items-center justify-center xs:mt-44">
          <div className="flex flex-col items-center justify-center">
            <h5
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-xl font-medium text-black dark:text-gray-100"
            >
              Backed By
            </h5>
            <div className="flex items-center justify-center">
              {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? (
                <img
                  data-aos="fade-up"
                  data-aos-delay="350"
                  src="yc2.svg"
                  className="mx-4 mt-2 h-10"
                  alt="White Y Combinator Logo"
                />
              ) : (
                <img
                  data-aos="fade-up"
                  data-aos-delay="350"
                  src="yc.svg"
                  className="mx-4 mt-2 h-10"
                  alt="Black Y Combinator Logo"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderSection
