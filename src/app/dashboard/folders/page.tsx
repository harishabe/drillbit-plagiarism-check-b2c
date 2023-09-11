'use client'

import { Divider, Typography } from '@mui/material'
import { BreadCrumb } from '@/app/components'
import { Folder } from '@/app/dashboard/PageView/FolderView'
import '../dashboard.scss'

const FolderBreadCrumb = [
  {
    name: 'Dashboard',
    link: '/dashboard',
    active: false,
  },
  {
    name: 'Folders',
    link: '',
    active: true,
  },
]

const Folders = () => {
  return (
    <div className="dashboard">
      <div className="page-container">
        <BreadCrumb item={FolderBreadCrumb} />
        <Typography variant="h2">Folders(18)</Typography>
        <Divider />
        <div className="container">
          <Folder />
        </div>
      </div>
    </div>
  )
}
export default Folders
