
'use client'

import { Box, Divider, Grid, Typography } from '@mui/material'
import { Navbar } from '@/app/components'
import { Folder } from '@/app/dashboard/PageView/FolderView'
import '../dashboard.scss';

const Files = () => {
    const FolderViewContainer = new Array(10)
    .fill(null)
    .map((_, index: number) => (
      <Grid key={index} item xs={6} sm={4} md={3} lg={1.5}>
        <Folder />
      </Grid>
    ))
  
    return(
    <div>
        <Navbar />
        <div className="dashboard">
            <div className="page-container">
            <Box>
                <Typography variant="h2">Folder(18)</Typography>
                <Divider />                
                <div className="container">
                <Grid container item spacing={2}>
                {FolderViewContainer}
                </Grid>
                </div>
            </Box>
            </div>
        </div>
    </div>  
    )
}

export default Files