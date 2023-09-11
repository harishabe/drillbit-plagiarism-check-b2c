'use client'

import { Divider, Typography } from '@mui/material'
import { BreadCrumb } from '@/app/components'
import { File } from '@/app/dashboard/PageView/FileView'

import '../dashboard.scss'

const FilesBreadCrumb = [
  {
    name: 'Dashboard',
    link: '/dashboard',
    active: false,
  },
  {
    name: `Files`,
    link: '',
    active: true,
  },
]

const Files = () => {
  return (
    <div className="dashboard">
      <div className="page-container">
        <BreadCrumb item={FilesBreadCrumb} />
        <Typography variant="h2">Files(16)</Typography>
        <Divider />
        <div className="container">
          <File />
        </div>
      </div>
    </div>
  )
}

export default Files
