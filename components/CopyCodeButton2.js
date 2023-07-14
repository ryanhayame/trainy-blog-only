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
        <span
          className="flex w-16 h-16 mx-auto items-center
                        justify-center text-2xl font-bold rounded-full
                        bg-orange-50 text-logodark"
        >
          2
        </span>
      </div>
      <Button
        variant="outlined"
        onClick={handleClick}
        className="text-gray-900 bg-slate-50"
        sx={{
          textTransform: 'none',
          px: '20px',
          py: '10px',
          minWidth: '40px',
          borderRadius: '10px',
          borderColor: 'lightgray',
          ':focus': {
            border: '1px solid #EFB357',
          },
        }}
      >
        <p className="text-md leading-4 xs:text-lg font-medium text-gray-700 max-w-2xl text-center mr-4">
          tensorboard --logdir logs/
        </p>
        {clicked ? (
          <MdCheck className="text-logodark" size={20} />
        ) : (
          <MdContentCopy className="text-gray-700" size={20} />
        )}
      </Button>
    </div>
  )
}

export default CopyCodeButton2
