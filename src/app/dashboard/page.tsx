'use client'

import { Box, Divider, Grid } from '@mui/material'
import { Navbar } from '@/app/components'
import { PageView } from '@/app/dashboard/PageView/PageView'
import '../dashboard/dashboard.scss'

const Dashboard = () => {
  const PageViewContainer = new Array(5).fill(null).map((_, index: number) => (
    <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
      <PageView />
    </Grid>
  ))

  return (
    <div>
      <Navbar />
      <div className="dashboard">
        <div className="page-container">
          <Box>
            <Grid container item spacing={2}>
              {PageViewContainer}
            </Grid>
          </Box>
        </div>
      </div>
      <Divider />
    </div>
  )
}

export default Dashboard
