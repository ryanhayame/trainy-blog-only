import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

import { TypeAnimation } from 'react-type-animation'

const HeaderSection = () => {
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
            className="text-center text-4xl font-extrabold text-gray-900 dark:text-gray-100 xs:text-5xl md:text-6xl lg:text-7xl"
          >
            Fully Managed
          </h1>
          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-center text-4xl font-extrabold text-gray-900 dark:text-gray-100 xs:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="bg-gradient-to-r from-logodark to-logolight bg-clip-text text-transparent">
              AI Infrastructure
            </span>{' '}
            For All
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="mx-4 mt-4 max-w-3xl text-center text-lg text-gray-700 dark:text-gray-300 xs:mt-10 lg:text-2xl"
          >
            We help teams
            <span>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  ' train',
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  ' optimize',
                  1000,
                  ' scale',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                className="mt-4 max-w-3xl text-center text-lg text-logomid dark:text-logomid xs:mt-10 lg:text-2xl"
                repeat={Infinity}
              />
            </span>
            AI models, effortlessly.
          </p>
        </div>
        <div className="mt-12 flex flex-col items-center justify-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="/get-started"
            aria-label="Get Started Page"
            data-aos="fade-up"
            data-aos-delay="150"
            className="inline-flex cursor-pointer items-center justify-center rounded-lg bg-black px-5 py-3 text-center text-base font-medium text-white drop-shadow-xl hover:bg-logomid dark:bg-logomid dark:hover:bg-logodark2"
          >
            Learn More
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
        <div className="container mx-2 mb-8 mt-8 h-1/5 flex-col items-center justify-center xs:mt-44">
          <div className="flex flex-col items-center justify-center">
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-xl font-medium text-black dark:text-gray-100"
            >
              Backed By
            </p>
            <div className="flex items-center justify-center">
              {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? (
                <img
                  data-aos="fade-up"
                  data-aos-delay="250"
                  src="yc2.svg"
                  className="mx-4 mt-2 h-10"
                  alt="White Y Combinator Logo"
                />
              ) : (
                <img
                  data-aos="fade-up"
                  data-aos-delay="250"
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
