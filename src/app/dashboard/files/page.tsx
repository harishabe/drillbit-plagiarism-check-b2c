
'use client'

import { Box, Divider, Grid, Typography } from '@mui/material'
import { Navbar } from '@/app/components'
import { File } from '@/app/dashboard/PageView/FileView'
import '../dashboard.scss';

const Files = () => {
    return(
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
            </Box>
            </div>
        </div>
    </div>  
    )
}

export default Files