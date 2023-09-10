'use client'

import Link from 'next/link'
import { Box, Button, Divider, Typography } from '@mui/material'
import { File } from '@/app/dashboard/PageView/FileView'
import { Folder } from '@/app/dashboard/PageView/FolderView'

import { Add as AddIcon } from '@mui/icons-material'

import '../dashboard/dashboard.scss'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="add-btn-container">
        <div className="btn">
          <Button variant="contained" size="small" endIcon={<AddIcon />}>
            Add
          </Button>
        </div>
      </div>
      <div className="page-container">
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
            <Folder />
            <div className="folder-view-all">
              <Link href="/dashboard/folders">
                <Typography variant="body1">View All</Typography>
              </Link>
            </div>
          </div>
        </Box>
      </div>
    </div>
  )
}

export default Dashboard
