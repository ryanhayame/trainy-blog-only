import React, { useEffect, useState, useRef } from 'react'

import Aos from 'aos'
import 'aos/dist/aos.css'
import { animateScroll as scroll, scroller } from 'react-scroll'
import NavMenu from './NavMenu'
import HeaderSection from './HeaderSection'
import Link from 'next/link'

import Button from '@mui/material/Button'
import { BsGithub, BsLinkedin, BsDiscord, BsTwitter } from 'react-icons/bs'

import ThemeSwitch from './ThemeSwitch'

const Nav = () => {
  return (
    <>
      <nav
        className={`sticky left-0 top-0 z-20 flex h-16 w-full justify-between bg-white px-4 py-3 drop-shadow-md dark:bg-gray-950 dark:shadow-darkMode`}
      >
        <div className="sm: sm: flex w-5/12 justify-start pl-2 md:w-1/2 md:justify-center">
          <Link href="/" className="flex items-center">
            <a className="flex items-center">
              <img src="/trainy-transparent.png" className="mr-1 h-8" alt="Trainy Logo" />
              <span className="self-center whitespace-nowrap text-2xl font-bold tracking-tighter text-black dark:text-gray-100">
                Trainy
              </span>
            </a>
          </Link>
          <div
            className="ml-4 hidden w-full items-center justify-between border-l md:flex md:w-auto"
            id="navbar-sticky"
          >
            <ul className="ml-4 mt-4 flex flex-col rounded-lg border border-white bg-white p-4 font-medium dark:bg-gray-950 md:mt-0 md:flex-row md:space-x-4 md:border-0 md:bg-white md:p-0 ">
              {/*<li>
                <div className="bg-white hidden md:flex md:gap-x-6">
                  <Link href='/features' className="inline-block cursor-pointer rounded-lg px-2 py-1 text-gray-700 dark:text-gray-100 hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white">
                    Features
                  </Link>
                </div>
              </li>*/}
              <li>
                <div className="hidden bg-white dark:bg-gray-950 md:flex md:gap-x-6">
                  <Link href="/docs">
                    <a className="inline-block cursor-pointer rounded-lg px-2 py-1 text-gray-700 hover:bg-slate-100 hover:text-slate-900 dark:text-gray-100 dark:hover:bg-darkThemeColor dark:hover:text-white">
                      Docs
                    </a>
                  </Link>
                </div>
              </li>
              <li>
                <div className="hidden bg-white dark:bg-gray-950 md:flex md:gap-x-6">
                  <Link href="/blog">
                    <a className="inline-block cursor-pointer rounded-lg px-2 py-1 text-gray-700 hover:bg-slate-100 hover:text-slate-900 dark:text-gray-100 dark:hover:bg-darkThemeColor dark:hover:text-white">
                      Blog
                    </a>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="mr-2 flex sm:w-7/12 sm:justify-end md:order-2 md:w-1/2 md:justify-center">
          <ThemeSwitch />
          <Button
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            href="https://github.com/Trainy-ai/nodify"
            className="hover:border-neutral-500 dark:border-neutral-600 dark:hover:bg-neutral-800"
            sx={{
              p: '5px',
              minWidth: '40px',
              borderRadius: '10px',
              color: 'black',
              borderColor: 'lightgray',
              mx: '0px',
              '@media (min-width: 320px)': {
                mx: '10px',
              },
            }}
          >
            <BsGithub
              className="text-gray-900 dark:text-gray-100 dark:hover:text-white"
              size={20}
            />
          </Button>
          <Button
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            href="https://www.linkedin.com/company/trainy-ai/about/"
            className="hover:border-neutral-500 dark:border-neutral-600 dark:hover:bg-neutral-800"
            sx={{
              mr: '10px',
              p: '5px',
              minWidth: '40px',
              borderRadius: '10px',
              color: 'black',
              borderColor: 'lightgray',
              display: 'none', // hide the button by default
              '@media (min-width: 768px)': {
                display: 'flex', // show the button from medium screen sizes and larger
              },
            }}
          >
            <BsLinkedin
              className="text-gray-900 dark:text-gray-100 dark:hover:text-white"
              size={20}
            />
          </Button>
          <Button
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            href="https://discord.gg/bTtfp4Msq2"
            className="hover:border-neutral-500 dark:border-neutral-600 dark:hover:bg-neutral-800"
            sx={{
              mr: '10px',
              p: '5px',
              minWidth: '40px',
              borderRadius: '10px',
              color: 'black',
              borderColor: 'lightgray',
              display: 'none', // hide the button by default
              '@media (min-width: 768px)': {
                display: 'flex', // show the button from medium screen sizes and larger
              },
            }}
          >
            <BsDiscord
              className="text-gray-900 dark:text-gray-100 dark:hover:text-white"
              size={20}
            />
          </Button>
          <Button
            target="_blank"
            rel="noopener noreferrer"
            className="mr-0 hover:border-neutral-500 dark:border-neutral-600 dark:hover:bg-neutral-800 md:mr-2"
            variant="outlined"
            href="https://twitter.com/TrainyAI"
            sx={{
              p: '5px',
              minWidth: '40px',
              borderRadius: '10px',
              borderColor: 'lightgray',
              display: 'none', // hide the button by default
              '@media (min-width: 768px)': {
                display: 'flex', // show the button from medium screen sizes and larger
              },
            }}
          >
            <BsTwitter
              className="text-gray-900 dark:text-gray-100 dark:hover:text-white"
              size={20}
            />
          </Button>
          {/*<button onClick={handleClick} type="button" className="text-white drop-shadow-xl bg-black hover:bg-logomid font-medium rounded-lg text-sm text-center px-4 py-2 mr-2 hidden md:block">Get started</button>*/}
          <NavMenu />
        </div>
      </nav>
    </>
  )
}

export default Nav
