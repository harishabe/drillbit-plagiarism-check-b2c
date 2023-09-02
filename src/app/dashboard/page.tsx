'use client'

import { Box, Divider, Grid, Typography } from '@mui/material'
import { Navbar } from '@/app/components'
import { File } from '@/app/dashboard/PageView/FileView'
import { Folder } from '@/app/dashboard/PageView/FolderView'
import { TextView } from '@/app/dashboard/Text/TextView'

import '../dashboard/dashboard.scss'

const Dashboard = () => {
  const FolderViewContainer = new Array(10)
    .fill(null)
    .map((_, index: number) => (
      <Grid key={index} item xs={6} sm={4} md={3} lg={1.5}>
        <Folder />
      </Grid>
    ))

  return (
    <div>
      <Navbar />
      <div className="dashboard">
        <div className="page-container">
          <Box>
            <Typography variant="h2">File(16)</Typography>
            <Divider />
            <div className="container">
              <File />
            </div>
            <Typography variant="h2">Folder(18)</Typography>
            <Divider />
            <div className="container">
              <Grid container item spacing={2}>
                {FolderViewContainer}
              </Grid>
            </div>
            <Divider />
            <div>
              <TextView />
            </div>
          </Box>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
