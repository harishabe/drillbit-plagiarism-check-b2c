'use client'

import { Box, Divider, Grid, Typography } from '@mui/material'
import { Navbar } from '@/app/components'
import { PageView } from '@/app/dashboard/PageView/PageView'
import '../dashboard/dashboard.scss'

const Dashboard = () => {
  const PageViewContainer = new Array(10).fill(null).map((_, index: number) => (
    <Grid key={index} item xs={12} sm={6} md={4} lg={2}>
      <PageView />
    </Grid>
  ))

  return (
    <div>
      <Navbar />
      <div className="dashboard">
        <div className="page-container">
          <Box>
            <Typography variant="h2">File</Typography>
            <Divider />
            <div className="container">
              <Grid container item spacing={2}>
                {PageViewContainer}
              </Grid>
            </div>
            <Typography variant="h2">Folder</Typography>
            <Divider />
            <div className="container">
              <Grid container item spacing={2}>
                {PageViewContainer}
              </Grid>
            </div>
          </Box>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
