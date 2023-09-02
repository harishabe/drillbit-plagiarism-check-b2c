'use client'

import Link from 'next/link'
import { Box, Divider, Grid, Typography } from '@mui/material'
import { Navbar } from '@/app/components'
import { File } from '@/app/dashboard/PageView/FileView'
import { Folder } from '@/app/dashboard/PageView/FolderView'

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
        <div className="page-container" style={{ paddingTop: '2rem' }}>
          <Box>
            <Typography variant="h2">File(16)</Typography>
            <Divider />
            <div className="container">
              <File />
              <div className="file-view-all">
                <Link href="/dashboard/files">
                  <Typography variant="body1">View All</Typography>
                </Link>
              </div>
            </div>
            <Typography variant="h2">Folder(18)</Typography>
            <Divider />
            <div className="container">
              <Grid container item spacing={2}>
                {FolderViewContainer}
              </Grid>
              <div className="folder-view-all">
                <Link href="/dashboard/folders">
                  <Typography variant="body1">View All</Typography>
                </Link>
              </div>
            </div>
            <Divider />
          </Box>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
