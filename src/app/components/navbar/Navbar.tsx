'use client'

import React, { useState, MouseEvent } from 'react'
import { useRouter } from 'next/navigation'
import {
  AppBar,
  Toolbar,
  Box,
  Tooltip,
  Avatar,
  IconButton,
  Divider,
  Button,
} from '@mui/material'
import { EllipsisText } from '@/app/components'
import { DrillBitLogo, DownArrowIcon } from 'public/assets'
import '../component.scss'

import { ProfileMenuList } from './ProfileMenuList'

const Navbar = () => {
  const router = useRouter()
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const openProfile = Boolean(anchorEl)
  const handleProfileClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className="navbar">
      <AppBar position="fixed" color="default">
        <Toolbar>
          <Box>
            <DrillBitLogo />
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <div className="flex">
              <div className="buy-pages">
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => router.push('/dashboard/buyPages')}
                >
                  Buy pages
                </Button>
              </div>
              <Divider orientation="vertical" flexItem />
              <div className="padding">
                <EllipsisText value={'Harisha'} />
                <EllipsisText value={'harish90909090909090'} variant="body2" />
              </div>
              <Tooltip arrow title="Profile">
                <IconButton>
                  <Avatar
                    onClick={handleProfileClick}
                    alt="Harisha"
                    className="profile-avatar"
                  >
                    {'Harisha' && 'Harisha'.charAt(0)?.toUpperCase()}
                  </Avatar>
                </IconButton>
              </Tooltip>
              <span
                className="arrow"
                role="button"
                onClick={handleProfileClick}
              >
                <DownArrowIcon />
              </span>
            </div>
          </Box>
        </Toolbar>
      </AppBar>
      <ProfileMenuList
        anchorEl={anchorEl}
        openProfile={openProfile}
        handleClose={handleClose}
      />
    </div>
  )
}

export default Navbar
