'use client'

import { Divider, Typography } from '@mui/material'
import { BreadCrumb } from '@/app/components'
import { File } from '@/app/dashboard/PageView/FileView'
import '../../dashboard.scss'

const submissionBreadCrumb = [
  {
    name: 'Dashboard',
    link: '/dashboard',
    active: false,
  },
 
  {
    name: `Folder submission`,
    link: '',
    active: true,
  },
]

const FolderSubmission = () => {
  return (
    <div className="dashboard">
      <div className="page-container">
        <BreadCrumb item={submissionBreadCrumb} />
        <Typography variant="h2">Files(16)</Typography>
        <Divider />
        <div className="container">
          <File />
        </div>
      </div>
    </div>
  )
}

export default FolderSubmission
