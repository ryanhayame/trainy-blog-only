import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

import Image from 'next/image'

const HeaderSection = () => {
  const [mounted, setMounted] = useState(false)

  const { theme, setTheme, resolvedTheme } = useTheme()

  // When mounted on client, now we can show the UI
  // up to date marker
  useEffect(() => setMounted(true), [])

  return (
    <div className="relative flex min-h-small w-full items-center justify-center overflow-hidden bg-white pb-12 pt-24 dark:bg-gray-900">
      <div className="absolute top-0  hidden h-[150vh] w-[300vh] -translate-x-[22vw] -translate-y-1/2 rotate-[110deg] transform bg-[#FFEFE6] object-cover dark:bg-[#1f1c1a] lg:block"></div>

      <div className="flex w-full flex-col items-center justify-center justify-items-center px-4 pb-16">
        <div className="flex max-w-6xl flex-row items-center justify-center">
          <div className="mb-[19vh] items-center md:grid md:grid-cols-12 md:gap-12 lg:gap-2">
            {/* Content */}
            <div
              className="mx-auto max-w-xl md:col-span-6 md:max-w-none lg:col-span-6"
              data-aos="fade-right"
            >
              <div className="flex flex-col items-center justify-center justify-items-center gap-6">
                <h1
                  data-aos="fade-up"
                  data-aos-delay="80"
                  className="text-left text-[40px] font-extrabold leading-10 text-gray-900 dark:text-gray-100 xs:text-5xl sm:text-6xl md:text-6xl lg:text-7xl"
                >
                  Modern{' '}
                  <span className="bg-gradient-to-r from-logodark to-logolight bg-clip-text text-transparent">
                    GPU Infrastructure
                  </span>{' '}
                  for AI Teams
                </h1>

                <h3
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="text-l text-left font-medium tracking-tight text-gray-600 dark:text-gray-100 xs:text-xl sm:text-xl md:text-xl lg:text-xl"
                >
                  Schedule AI workloads, manage cluster health, and understand resource allocation
                  with Trainy's platform.
                </h3>
              </div>
              <div className="my-12 flex items-center justify-start">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/get-started"
                  aria-label="Get Started Page"
                  data-aos="fade-up"
                  data-aos-delay="150"
                  className="flex cursor-pointer items-start justify-center rounded-lg bg-black px-5 py-3 text-center text-base font-medium text-white drop-shadow-xl hover:bg-logomid dark:bg-logomid2 dark:hover:bg-logomid"
                >
                  Book a Demo
                  <svg
                    className="-mr-1 ml-2 h-[24px] w-[24px]"
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
            </div>
            {/* Image */}
            <div
              className="mx-auto mb-8 flex max-w-xl justify-center rounded-xl md:order-1 md:col-span-6 md:w-full md:max-w-none lg:col-span-6 lg:mb-0"
              data-aos="fade-up"
            >
              <Image
                className="mx-auto h-auto max-w-full rounded-xl dark:brightness-90"
                src="/headerPic.png"
                width={600}
                height={480}
                alt="Features 03"
              />
            </div>
          </div>
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
                    onClick={() =>
                      window.open('https://www.ycombinator.com/companies/trainy', '_blank')
                    }
                    style={{ cursor: 'pointer' }}
                  />
                  <Image
                    src="/zventure2.svg"
                    alt="Z Venture Capital Logo for Dark Mode"
                    width={220}
                    height={30}
                    onClick={() => window.open('https://zvc.vc/en/', '_blank')}
                    style={{ cursor: 'pointer' }}
                  />
                  <Image
                    src="/lynett2.svg"
                    alt="Lynett Capital Logo for Dark Mode"
                    width={75}
                    height={95}
                    onClick={() => window.open('https://www.lynettcapital.com/', '_blank')}
                    style={{ cursor: 'pointer' }}
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
                    onClick={() => window.open('https://www.digitalocean.com/', '_blank')}
                    style={{ cursor: 'pointer' }}
                  />
                  <Image
                    src="/diffuse2.png"
                    alt="Diffuse Bio Logo for Dark Mode"
                    width={160}
                    height={90}
                    style={{ marginTop: '3px', cursor: 'pointer' }}
                    onClick={() => window.open('https://diffuse.bio/', '_blank')}
                  />
                  <Image
                    src="/paperspace2.svg"
                    alt="Paperspace Logo for Dark Mode"
                    width={70}
                    height={80}
                    onClick={() => window.open('https://www.paperspace.com/', '_blank')}
                    style={{ cursor: 'pointer' }}
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
                    onClick={() =>
                      window.open('https://www.ycombinator.com/companies/trainy', '_blank')
                    }
                    style={{ cursor: 'pointer' }}
                  />
                  <Image
                    src="/zventure.svg"
                    alt="Z Venture Capital Logo for Light Mode"
                    width={220}
                    height={30}
                    onClick={() => window.open('https://zvc.vc/en/', '_blank')}
                    style={{ cursor: 'pointer' }}
                  />
                  <Image
                    src="/lynett.svg"
                    alt="Lynett Capital Logo for Light Mode"
                    width={75}
                    height={95}
                    onClick={() => window.open('https://www.lynettcapital.com/', '_blank')}
                    style={{ cursor: 'pointer' }}
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
                    onClick={() => window.open('https://www.digitalocean.com/', '_blank')}
                    style={{ cursor: 'pointer' }}
                  />
                  <Image
                    src="/diffuse.png"
                    alt="Diffuse Bio Logo for Light Mode"
                    width={160}
                    height={90}
                    style={{ marginTop: '3px', cursor: 'pointer' }}
                    onClick={() => window.open('https://diffuse.bio/', '_blank')}
                  />
                  <Image
                    src="/paperspace.svg"
                    alt="Paperspace Logo for Light Mode"
                    width={70}
                    height={80}
                    onClick={() => window.open('https://www.paperspace.com/', '_blank')}
                    style={{ cursor: 'pointer' }}
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
