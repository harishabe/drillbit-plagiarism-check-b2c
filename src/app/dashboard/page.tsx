'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  Box,
  Button,
  Divider,
  Typography,
  Tooltip,
  IconButton,
  Grid,
} from '@mui/material'
import {
  DialogModal,
  FileView,
  FolderView,
  FormComponent,
} from '@/app/components'
import {
  Add as AddIcon,
  SettingsOutlined as SettingsOutlinedIcon,
} from '@mui/icons-material'
import { fileData } from 'public/assets/mockData/data'
import { folderData } from 'public/assets/mockData/data'
import FormJson from '@/app/constant/form/folderFileSettings.json'
import '../dashboard/dashboard.scss'

const Dashboard = () => {
  const router = useRouter()

  const [isFile, setIsFile] = useState(false)

  const handleFileSettings = () => {
    setIsFile(true)
  }

  const handleClose = () => {
    setIsFile(false)
  }

  const handleNavigate = () => {
    router.push('/dashboard/files')
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
            <Grid container item spacing={2}>
              {fileData?.map((item, key) => (
                <Grid key={key} item xs={6} sm={4} md={3} lg={1.5}>
                  <FileView fileData={item} />
                </Grid>
              ))}
            </Grid>
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
              {folderData?.map((item, key) => (
                <Grid key={key} item xs={6} sm={4} md={3} lg={1.5}>
                  <FolderView
                    folderData={item}
                    isLink={true}
                    handleNavigate={handleNavigate}
                  />
                </Grid>
              ))}
            </Grid>
            <div className="folder-view-all">
              <Link href="/dashboard/folders">
                <Typography variant="body1">View All</Typography>
              </Link>
            </div>
          </div>
        </Box>
      </div>

      <DialogModal
        isOpen={isFile}
        headingTitle="File Settings"
        maxWidth={'xs'}
        handleClose={handleClose}
      >
        {FormJson
          ? FormJson.map((field) => (
              <FormComponent key={field.id} field={field} />
            ))
          : null}
      </DialogModal>
    </div>
  )
}

export default Dashboard
