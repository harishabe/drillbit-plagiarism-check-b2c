import Link from 'next/link'
import {
  Avatar,
  Divider,
  Typography,
  Menu,
  MenuItem,
  ListItemText,
  ListItemIcon,
  Button,
} from '@mui/material'
import { EllipsisText } from '@/app/components'
import { profileData } from 'public/assets/mockData/data'

interface IProfileMenuListProps {
  anchorEl: HTMLElement | null
  openProfile: boolean
  handleClose: () => void
}

export const ProfileMenuList = ({
  anchorEl,
  openProfile,
  handleClose,
}: IProfileMenuListProps) => {
  return (
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
        <Link href={item.href}>
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
        </Link>
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
  )
}
