import { useState, useEffect } from 'react'
import Button from '@mui/material/Button'

import { MdContentCopy, MdCheck } from 'react-icons/md'

const CopyCodeButton2 = () => {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(true)
    navigator.clipboard.writeText(`tensorboard --logdir logs/`)
  }

  useEffect(() => {
    if (clicked) {
      const timeout = setTimeout(() => {
        setClicked(false)
      }, 3000)

      return () => clearTimeout(timeout) // Cleanup the timeout if component unmounts before the timeout is triggered
    }
  }, [clicked])

  return (
    <div className="flex flex-row">
      <div className="pr-4">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-50 text-2xl font-bold text-logodark dark:bg-logomid dark:text-white">
          2
        </span>
      </div>
      <Button
        variant="outlined"
        onClick={handleClick}
        className="bg-slate-50 text-gray-900 dark:bg-gray-950 dark:hover:bg-gray-900"
        sx={{
          textTransform: 'none',
          px: '20px',
          py: '10px',
          minWidth: '40px',
          borderRadius: '10px',
          borderColor: 'darkgray',
          ':focus': {
            border: '1px solid #EFB357',
          },
        }}
      >
        <p className="text-md mr-4 text-center font-medium leading-4 text-gray-700 first-letter:max-w-2xl dark:text-gray-200 dark:hover:text-gray-100 xs:text-lg">
          tensorboard --logdir logs/
        </p>
        {clicked ? (
          <MdCheck className="text-logodark dark:text-logomid" size={20} />
        ) : (
          <MdContentCopy className="text-gray-700 dark:text-gray-400" size={20} />
        )}
      </Button>
    </div>
  )
}

export default CopyCodeButton2
