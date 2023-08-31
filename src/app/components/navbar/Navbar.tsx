'use client'

import React, { useState, MouseEvent } from 'react'
import {
  AppBar,
  Toolbar,
  Box,
  Tooltip,
  Avatar,
  IconButton,
  Divider,
  Typography,
  Menu,
  MenuItem,
  ListItemText,
  ListItemIcon,
  Button,
} from '@mui/material'
import { EllipsisText } from '@/app/components'
import { DrillBitLogo, DownArrowIcon } from 'public/assets'
import { profileData } from 'public/assets/mockData/data'
import '../component.scss'

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const openProfile = Boolean(anchorEl)
  const handleProfileClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <AppBar position="fixed" color="default">
        <Toolbar>
          <Box>
            <DrillBitLogo />
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <div className="flex">
              <Divider orientation="vertical" flexItem />
              <div className="padding">
                <EllipsisText value={'Harisha'} />
                <EllipsisText value="harish90909090909090" variant="body2" />
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
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={openProfile}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
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
        <MenuItem className="dropdown-menuitem">
          <Avatar alt={'name'} className="dropdown-avatar-profile">
            {'Harisha' && 'Harisha'.charAt(0)?.toUpperCase()}
          </Avatar>
          <ListItemText
            primary={<EllipsisText value={'Harisha'} />}
            secondary={<EllipsisText value={'Person'} variant="body2" />}
          />
        </MenuItem>
        {profileData?.map((item) => (
          <>
            <Divider />
            <MenuItem className="pt0-pl1">
              <ListItemIcon>
                <Avatar
                  component={item.icon}
                  className="dropdown-avatar-menuitem"
                />
              </ListItemIcon>
              <ListItemText
                className="pt-5-pb-15"
                primary={item.primary}
                secondary={item.secondary}
              />
            </MenuItem>
          </>
        ))}
        <Divider />
        <MenuItem className="mt-18">
          <Button variant="contained" fullWidth color="primary">
            Log out
          </Button>
        </MenuItem>

        <div className="version">
          <Typography variant="h5">v.0.0.0</Typography>
        </div>
      </Menu>
    </div>
  )
}

export default Navbar
