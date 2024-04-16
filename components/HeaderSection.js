import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

import { TypeAnimation } from 'react-type-animation'
import Image from 'next/image'

const HeaderSection = () => {
  const [mounted, setMounted] = useState(false)

  const { theme, setTheme, resolvedTheme } = useTheme()

  // When mounted on client, now we can show the UI
  // up to date marker
  useEffect(() => setMounted(true), [])

  return (
    <div className="flex min-h-small w-full items-center justify-center bg-white py-12 dark:bg-gray-900 xs:h-screen md:py-24">
      <div className="container mx-2 flex h-screen w-full flex-col items-center justify-center justify-items-center pb-16 pt-44 sm:py-44">
        <div className="flex max-w-4xl flex-col items-center justify-center">
          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-center text-4xl font-extrabold text-gray-900 dark:text-gray-100 xs:text-5xl md:text-6xl lg:text-7xl"
          >
            Managed Infrastructure
          </h1>
          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-center text-4xl font-extrabold text-gray-900 dark:text-gray-100 xs:text-5xl md:text-6xl lg:text-7xl"
          >
            For{' '}
            <span className="bg-gradient-to-r from-logodark to-logolight bg-clip-text text-transparent">
              Generative AI
            </span>
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="mx-4 mt-4 min-h-[56px] max-w-3xl text-center text-lg text-gray-700 dark:text-gray-300 xs:mt-10 lg:text-2xl"
          >
            We help teams
            <span>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  ' train',
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  ' scale',
                  1000,
                  ' accelerate',
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
        <div className="mb-[20vh] mt-6 flex flex-col items-center justify-center sm:mb-[30vh]">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="/get-started"
            aria-label="Get Started Page"
            data-aos="fade-up"
            data-aos-delay="150"
            className="inline-flex cursor-pointer items-center justify-center rounded-lg bg-black px-5 py-3 text-center text-base font-medium text-white drop-shadow-xl hover:bg-logomid dark:bg-logomid2 dark:hover:bg-logomid"
          >
            Join Waitlist
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
        <div className="flex-col items-center">
          {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? (
            <div className="flex w-full flex-col justify-center lg:flex-row lg:divide-x-2">
              <div className="w-100 flex flex-col justify-center sm:w-[500px]">
                <p
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="text-center text-xl font-medium text-black dark:text-gray-100"
                >
                  Backed By
                </p>
                <div
                  className="flex justify-between gap-2 pr-0 sm:gap-6 lg:pr-7"
                  data-aos="fade-up"
                  data-aos-delay="250"
                >
                  <Image
                    src="/yc2.svg"
                    alt="Y Combinator Logo for Dark Mode"
                    width={180}
                    height={30}
                  />
                  <Image
                    src="/zventure2.svg"
                    alt="Z Venture Capital Logo for Dark Mode"
                    width={220}
                    height={30}
                  />
                  <Image
                    src="/lynett2.svg"
                    alt="Lynett Capital Logo for Dark Mode"
                    width={75}
                    height={95}
                  />
                </div>
              </div>

              <div className="w-100 flex flex-col justify-center sm:w-[500px]">
                <p
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="text-center text-xl font-medium text-black dark:text-gray-100"
                >
                  Trusted By
                </p>
                <div
                  className="flex justify-between gap-2 pl-0 sm:gap-6 lg:pl-8"
                  data-aos="fade-up"
                  data-aos-delay="250"
                >
                  <Image
                    src="/digitalocean.svg"
                    alt="Digital Ocean Logo for Dark Mode"
                    width={180}
                    height={40}
                  />
                  <Image
                    src="/diffuse2.png"
                    alt="Diffuse Bio Logo for Dark Mode"
                    width={160}
                    height={90}
                    style={{ marginTop: '3px' }}
                  />
                  <Image
                    src="/paperspace2.svg"
                    alt="Paperspace Logo for Dark Mode"
                    width={70}
                    height={80}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="flex w-full flex-col justify-center lg:flex-row lg:divide-x-2">
              <div className="w-100 flex flex-col justify-center sm:w-[500px]">
                <p
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="text-center text-xl font-medium text-black dark:text-gray-100"
                >
                  Backed By
                </p>
                <div
                  className="flex justify-between gap-2 pr-0 sm:gap-6 lg:pr-7"
                  data-aos="fade-up"
                  data-aos-delay="250"
                >
                  <Image
                    src="/yc.svg"
                    alt="Y Combinator Logo for Light Mode"
                    width={180}
                    height={30}
                  />
                  <Image
                    src="/zventure.svg"
                    alt="Z Venture Capital Logo for Light Mode"
                    width={220}
                    height={30}
                  />
                  <Image
                    src="/lynett.svg"
                    alt="Lynett Capital Logo for Light Mode"
                    width={75}
                    height={95}
                  />
                </div>
              </div>

              <div className="w-100 flex flex-col justify-center sm:w-[500px]">
                <p
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="text-center text-xl font-medium text-black dark:text-gray-100"
                >
                  Trusted By
                </p>
                <div
                  className="flex justify-between gap-2 pl-0 sm:gap-6 lg:pl-8"
                  data-aos="fade-up"
                  data-aos-delay="250"
                >
                  <Image
                    src="/digitalocean.svg"
                    alt="Digital Ocean Logo for Light Mode"
                    width={180}
                    height={40}
                  />
                  <Image
                    src="/diffuse.png"
                    alt="Diffuse Bio Logo for Light Mode"
                    width={160}
                    height={90}
                    style={{ marginTop: '3px' }}
                  />
                  <Image
                    src="/paperspace.svg"
                    alt="Paperspace Logo for Light Mode"
                    width={70}
                    height={80}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default HeaderSection
