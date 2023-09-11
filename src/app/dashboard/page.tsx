'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  Box,
  Button,
  Divider,
  Typography,
  Tooltip,
  IconButton,
  Grid,
} from '@mui/material'
import { DialogModal, FormComponent } from '@/app/components'
import { File } from '@/app/dashboard/PageView/FileView'
import { Folder } from '@/app/dashboard/PageView/FolderView'
import {
  Add as AddIcon,
  SettingsOutlined as SettingsOutlinedIcon,
} from '@mui/icons-material'
import FormJson from '@/app/constant/form/folderFileSettings.json'
import '../dashboard/dashboard.scss'

const Dashboard = () => {
  const [isFile, setIsFile] = useState(false)

  const handleFileSettings = () => {
    setIsFile(true)
  }

  const handleClose = () => {
    setIsFile(false)
  }
  return (
    <div className="dashboard">
      <div className="add-btn-container">
        <div className="btn">
          <Button variant="contained" size="small" endIcon={<AddIcon />}>
            Add
          </Button>
        </div>
      </div>
      <div className="dashboard-page-container">
        <Box>
          <Typography variant="h2" className="flex">
            <Grid container>
              <Grid md={11.7} sm={11.7}>
                Files(16)
              </Grid>
              <Grid md={0.3} sm={0.3}>
                <Tooltip title="File Settings" arrow>
                  <IconButton onClick={handleFileSettings} size="small">
                    <SettingsOutlinedIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
          </Typography>

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
      {isFile && (
        <DialogModal
          isOpen={isFile}
          headingTitle="File Settings"
          maxWidth={'xs'}
          children={
            FormJson
              ? FormJson.map((field) => (
                  <FormComponent key={field.id} field={field} />
                ))
              : null
          }
          handleClose={handleClose}
        />
      )}
    </div>
  )
}

export default Dashboard
