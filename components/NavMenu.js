import * as React from 'react'
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import Link from 'next/link'

export default function NavMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleCloudBtn = () => {
    if (window.location.pathname !== '/') {
      localStorage.setItem('executeFunctionOnTargetPage', 'true')
      window.location.href = '/'
    } else {
      window.scrollTo(
        0,
        document.body.scrollHeight - 800 || document.documentElement.scrollHeight
      ) - 800
    }
  }

  return (
    <div className="block md:hidden">
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip>
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 1 }}
            aria-label="Hamburger Menu"
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            className="inline-flex items-center rounded-lg p-2 text-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-800 md:hidden"
          >
            <svg
              className="block h-6 w-6 fill-gray-900 dark:fill-gray-100 md:hidden"
              aria-hidden="true"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {/*<MenuItem className="font-semibold">
          <Link href="/features">Features</Link>
        </MenuItem>*/}
        <MenuItem className="font-semibold">
          <Link aria-label="Blog" href="/blog">
            Blog
          </Link>
        </MenuItem>
        <MenuItem className="font-semibold">
          <Link aria-label="Docs" href="https://llm-atc.readthedocs.io/en/latest">
            Docs
          </Link>
        </MenuItem>
        <MenuItem onClick={() => handleCloudBtn()} className="font-semibold">
          Cloud
        </MenuItem>
      </Menu>
    </div>
  )
}
