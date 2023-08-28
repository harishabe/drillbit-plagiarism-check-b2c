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
import { DrillBitLogo } from 'public/assets'

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
            <div style={{ display: 'flex' }}>
              <Divider orientation="vertical" flexItem />
              <div style={{ padding: '0.3rem 0.5rem 0rem 0.8rem' }}>
                <Typography variant="h4">Harisha</Typography>
                <Typography variant="h5">harish90...</Typography>
              </div>
              <Tooltip arrow title="Profile">
                <IconButton>
                  <Avatar
                    onClick={handleProfileClick}
                    alt="Harisha"
                    sx={{
                      width: 45,
                      height: 45,
                      background: '#68C886',
                      color: '#fff',
                    }}
                  >
                    {'Harisha' && 'Harisha'.charAt(0)?.toUpperCase()}
                  </Avatar>
                </IconButton>
              </Tooltip>
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
        <MenuItem
          style={{
            paddingTop: '0px',
            paddingBottom: '0px',
            width: 328,
            boxShadow: 'none',
            maxWidth: '100%',
            background: '#fff',
          }}
        >
          <Avatar
            alt={'name'}
            style={{
              width: '56px',
              height: '56px',
              background: '#68C886',
              color: '#fff',
            }}
          >
            {'Harisha' && 'Harisha'.charAt(0)?.toUpperCase()}
          </Avatar>
          <ListItemText primary={'Harisha'} secondary={'Person'} />
        </MenuItem>
        <Divider style={{ marginLeft: '10px', marginRight: '10px' }} />
        <MenuItem style={{ paddingTop: '0px', paddingBottom: '0px' }}>
          <ListItemIcon>
            <Avatar />
          </ListItemIcon>
          <ListItemText
            style={{ padding: '5px 15px' }}
            primary="Account info"
            secondary="Account details"
          />
        </MenuItem>
        <Divider style={{ marginLeft: '10px', marginRight: '10px' }} />
        <MenuItem style={{ paddingTop: '0px', paddingBottom: '0px' }}>
          <ListItemIcon>
            <Avatar />
          </ListItemIcon>
          <ListItemText
            style={{ padding: '5px 15px' }}
            primary="Account info"
            secondary="Account details"
          />
        </MenuItem>
        <MenuItem
          style={{ paddingTop: '0px', paddingBottom: '0px', marginTop: '18px' }}
        >
          <Button variant="contained" fullWidth color="primary">
            Log out
          </Button>
        </MenuItem>

        <div style={{ textAlign: 'right', padding: '0px 15px' }}>
          <Typography variant="h5">v.0.0.0</Typography>
        </div>
      </Menu>
    </div>
  )
}

export default Navbar
