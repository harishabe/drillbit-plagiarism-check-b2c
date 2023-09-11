'use client'

import React, { useState } from 'react'
import { Divider, Grid, Typography, Tooltip, IconButton } from '@mui/material'
import { BreadCrumb, DialogModal, FormComponent } from '@/app/components'
import { Folder } from '@/app/dashboard/PageView/FolderView'
import { SettingsOutlined as SettingsOutlinedIcon } from '@mui/icons-material'
import FormJson from '@/app/constant/form/folderFileSettings.json'
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
  const [isFolder, setIsFolder] = useState(false)

  const handleFolderSettings = () => {
    setIsFolder(true)
  }

  const handleClose = () => {
    setIsFolder(false)
  }

  return (
    <div className="dashboard">
      <div className="page-container">
        <BreadCrumb item={FolderBreadCrumb} />
        <Typography variant="h2" className="flex">
          <Grid container>
            <Grid md={11.7} sm={11.7}>
              Folders(18)
            </Grid>
            <Grid md={0.3} sm={0.3}>
              <Tooltip title="Folder Settings" arrow>
                <IconButton onClick={handleFolderSettings} size="small">
                  <SettingsOutlinedIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Typography>
        <Divider />
        <div className="container">
          <Folder />
        </div>
      </div>
      {isFolder && (
        <DialogModal
          isOpen={isFolder}
          headingTitle="Folder Settings"
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
export default Folders
