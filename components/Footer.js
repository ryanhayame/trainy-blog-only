import Button from '@mui/material/Button'
import { BsGithub, BsLinkedin, BsDiscord, BsTwitter } from 'react-icons/bs'

export default function Footer() {
  return (
    <footer className="bg-slate-50 w-full">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="https://trainy.ai/" className="flex items-center mb-4 sm:mb-0">
            <img src="trainy-transparent.png" className="h-8 mr-1" alt="Trainy Logo" />
            <span className="self-center text-2xl font-bold whitespace-nowrap text-black tracking-tighter">
              Trainy
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Button
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                href="https://github.com/Trainy-ai/nodify"
                sx={{
                  mr: '10px',
                  p: '5px',
                  minWidth: '35px',
                  borderRadius: '10px',
                  color: 'black',
                  borderColor: 'lightgray',
                }}
              >
                <BsGithub className="text-gray-900" size={20} />
              </Button>
            </li>
            <li>
              <Button
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                href="https://www.linkedin.com/company/trainy-ai/about/"
                sx={{
                  mr: '10px',
                  p: '5px',
                  minWidth: '35px',
                  borderRadius: '10px',
                  color: 'black',
                  borderColor: 'lightgray',
                }}
              >
                <BsLinkedin className="text-gray-900" size={20} />
              </Button>
            </li>
            <li>
              <Button
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                href="https://discord.gg/Wk9YAZdV"
                sx={{
                  mr: '10px',
                  p: '5px',
                  minWidth: '35px',
                  borderRadius: '10px',
                  color: 'black',
                  borderColor: 'lightgray',
                }}
              >
                <BsDiscord className="text-gray-900" size={20} />
              </Button>
            </li>
            <li>
              <Button
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                href="https://twitter.com/TrainyAI"
                sx={{
                  mr: '20px',
                  p: '5px',
                  minWidth: '35px',
                  borderRadius: '10px',
                  borderColor: 'lightgray',
                }}
              >
                <BsTwitter className="text-gray-900" size={20} />
              </Button>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 lg:my-8 w-full" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
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
