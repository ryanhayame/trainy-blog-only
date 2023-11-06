import Button from '@mui/material/Button'
import { BsGithub, BsLinkedin, BsDiscord, BsTwitter } from 'react-icons/bs'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="w-full bg-slate-50 dark:bg-darkThemeColor">
      <div className="mx-auto w-full p-4 sm:w-5/6 md:w-3/4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="https://trainy.ai/" className="mb-4 flex items-center sm:mb-0">
            <div className="mr-1 flex items-center">
              <Image src="/trainy-transparent.png" width={30} height={30} alt="Trainy Logo" />
            </div>
            <span className="self-center whitespace-nowrap text-2xl font-bold tracking-tighter text-black dark:text-gray-100">
              Trainy
            </span>
          </a>
          <ul className="mb-6 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mb-0">
            <li>
              <Button
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                href="https://github.com/Trainy-ai"
                aria-label="Trainy Github"
                className="hover:border-neutral-500 dark:border-neutral-600 dark:hover:bg-neutral-800"
                sx={{
                  mr: '10px',
                  p: '5px',
                  minWidth: '35px',
                  borderRadius: '10px',
                  color: 'black',
                  borderColor: 'lightgray',
                }}
              >
                <BsGithub
                  className="text-gray-900 dark:text-gray-100 dark:hover:text-white"
                  size={20}
                />
              </Button>
            </li>
            <li>
              <Button
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                href="https://www.linkedin.com/company/trainy-ai/about/"
                aria-label="Trainy LinkedIn"
                className=" hover:border-neutral-500 dark:border-neutral-600 dark:hover:bg-neutral-800"
                sx={{
                  mr: '10px',
                  p: '5px',
                  minWidth: '35px',
                  borderRadius: '10px',
                  color: 'black',
                  borderColor: 'lightgray',
                }}
              >
                <BsLinkedin
                  className="text-gray-900 dark:text-gray-100 dark:hover:text-white"
                  size={20}
                />
              </Button>
            </li>
            <li>
              <Button
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                href="https://discord.gg/HQUBJSVgAP"
                aria-label="Trainy Discord"
                className=" hover:border-neutral-500 dark:border-neutral-600 dark:hover:bg-neutral-800"
                sx={{
                  mr: '10px',
                  p: '5px',
                  minWidth: '35px',
                  borderRadius: '10px',
                  color: 'black',
                  borderColor: 'lightgray',
                }}
              >
                <BsDiscord
                  className="text-gray-900 dark:text-gray-100 dark:hover:text-white"
                  size={20}
                />
              </Button>
            </li>
            <li>
              <Button
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                href="https://twitter.com/TrainyAI"
                aria-label="Trainy Twitter"
                className="hover:border-neutral-500 dark:border-neutral-600 dark:hover:bg-neutral-800"
                sx={{
                  mr: '20px',
                  p: '5px',
                  minWidth: '35px',
                  borderRadius: '10px',
                  borderColor: 'lightgray',
                }}
              >
                <BsTwitter
                  className="text-gray-900 dark:text-gray-100 dark:hover:text-white"
                  size={20}
                />
              </Button>
            </li>
          </ul>
        </div>
        <hr className="my-6 w-full border-gray-200 lg:my-8" />
        <span className="block text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          © 2023{' '}
          <a href="https://trainy.ai/" className="hover:underline">
            Trainy
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}
