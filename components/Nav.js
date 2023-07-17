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
        className={`bg-white h-16 sticky flex w-full z-20 top-0 left-0 py-3 px-4 justify-between drop-shadow-md`}
      >
        <div className="sm: sm: flex md:w-1/2 md:justify-center w-5/12 justify-start pl-2">
          <Link href="/" className="flex items-center">
            <a className="flex items-center">
              <img src="/trainy-transparent.png" className="h-8 mr-1" alt="Trainy Logo" />
              <span className="self-center text-2xl text-black font-bold whitespace-nowrap tracking-tighter">
                Trainy
              </span>
            </a>
          </Link>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto ml-4 border-l"
            id="navbar-sticky"
          >
            <ul className="flex flex-col ml-4 p-4 md:p-0 mt-4 font-medium border border-white rounded-lg bg-white md:flex-row md:space-x-4 md:mt-0 md:border-0 md:bg-white ">
              {/*<li>
                <div className="bg-white hidden md:flex md:gap-x-6">
                  <Link href='/features' className="inline-block cursor-pointer rounded-lg px-2 py-1 text-gray-700 hover:bg-slate-100 hover:text-slate-900">
                    Features
                  </Link>
                </div>
              </li>*/}
              <li>
                <div className="bg-white hidden md:flex md:gap-x-6">
                  <Link href="/docs">
                    <a className="inline-block cursor-pointer rounded-lg px-2 py-1 text-gray-700 hover:bg-slate-100 hover:text-slate-900">
                      Docs
                    </a>
                  </Link>
                </div>
              </li>
              <li>
                <div className="bg-white hidden md:flex md:gap-x-6">
                  <Link href="/blog">
                    <a className="inline-block cursor-pointer rounded-lg px-2 py-1 text-gray-700 hover:bg-slate-100 hover:text-slate-900">
                      Blog
                    </a>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex mr-2 md:w-1/2 md:order-2 md:justify-center sm:w-7/12 sm:justify-end">
          <Button
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            href="https://github.com/Trainy-ai/nodify"
            sx={{
              mr: '10px',
              p: '5px',
              minWidth: '40px',
              borderRadius: '10px',
              color: 'black',
              borderColor: 'lightgray',
            }}
          >
            <BsGithub className="text-gray-900" size={20} />
          </Button>
          <Button
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            href="https://www.linkedin.com/company/trainy-ai/about/"
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
            <BsLinkedin className="text-gray-900" size={20} />
          </Button>
          <Button
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            href="https://discord.gg/Wk9YAZdV"
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
            <BsDiscord className="text-gray-900" size={20} />
          </Button>
          <Button
            target="_blank"
            rel="noopener noreferrer"
            className="mr-0 md:mr-2"
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
            <BsTwitter className="text-gray-900" size={20} />
          </Button>
          {/*<button onClick={handleClick} type="button" className="text-white drop-shadow-xl bg-black hover:bg-logomid font-medium rounded-lg text-sm text-center px-4 py-2 mr-2 hidden md:block">Get started</button>*/}
          <NavMenu />
        </div>
      </nav>
    </>
  )
}

export default Nav
