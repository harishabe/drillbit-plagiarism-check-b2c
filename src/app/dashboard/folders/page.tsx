'use client'

import { Divider, Grid, Typography } from '@mui/material'
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
  const FolderViewContainer = new Array(10)
    .fill(null)
    .map((_, index: number) => (
      <Grid key={index} item xs={6} sm={4} md={3} lg={1.5}>
        <Folder />
      </Grid>
    ))

  return (
    <div className="dashboard">
      <div className="page-container">
        <BreadCrumb item={FolderBreadCrumb} />
        <Typography variant="h2">Folder(18)</Typography>
        <Divider />
        <div className="container">
          <Grid container item spacing={2}>
            {FolderViewContainer}
          </Grid>
        </div>
      </div>
    </div>
  )
}
export default Folders
