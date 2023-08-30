import { File, FileDoc, FileWord } from '../../assets'
import AccountIcon from '../icon/profile/AccountIcon'
import ChangePwdIcon from '../icon/profile/ChangePwdIcon'
import HelpIcon from '../icon/profile/HelpIcon'
import SwitchAccountIcon from '../icon/profile/SwitchAccountIcon'

export const fileData = [
  {
    name: 'Thesis',
    fileType: 'pdf',
    FileLogo: File,
  },
  {
    name: 'Thesis',
    fileType: 'doc',
    FileLogo: FileDoc,
  },
  {
    name: 'Thesis',
    fileType: 'word',
    FileLogo: File,
  },
  {
    name: 'Thesis',
    fileType: 'pdf',
    FileLogo: FileWord,
  },
  {
    name: 'Thesis',
    fileType: 'doc',
    FileLogo: File,
  },
]

export const profileData = [
  {
    primary: 'Account Info',
    icon: AccountIcon,
    secondary: 'Account details',
  },
  {
    primary: 'Transaction history',
    icon: SwitchAccountIcon,
    secondary: 'Transaction details',
  },
  {
    primary: 'Help',
    icon: HelpIcon,
    secondary: 'PDF / Video',
  },
  {
    primary: 'Change password',
    icon: ChangePwdIcon,
    secondary: 'Email',
  },
]
