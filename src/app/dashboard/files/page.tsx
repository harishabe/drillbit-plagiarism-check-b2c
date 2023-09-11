'use client'
import React, { useState } from 'react'
import { Divider, Typography, Tooltip, IconButton, Grid } from '@mui/material'
import { BreadCrumb, DialogModal, FormComponent } from '@/app/components'
import { File } from '@/app/dashboard/PageView/FileView'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import FormJson from '@/app/constant/form/folderFileSettings.json'
import '../dashboard.scss'

const FilesBreadCrumb = [
  {
    name: 'Dashboard',
    link: '/dashboard',
    active: false,
  },
  {
    name: `Files`,
    link: '',
    active: true,
  },
]

const Files = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleSettings = () => {
    setIsOpen(true)
  }
  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <div className="dashboard">
      <div className="page-container">
        <BreadCrumb item={FilesBreadCrumb} />
        <Typography variant="h2" className="flex">
          <Grid container>
            <Grid md={11.7} sm={11.7}>
              Files(16)
            </Grid>
            <Grid md={0.3} sm={0.3}>
              <Tooltip title="File Setting" arrow>
                <IconButton onClick={handleSettings} size="small">
                  <SettingsOutlinedIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Typography>
        <Divider />
        <div className="container">
          <File />
        </div>
        {isOpen && (
          <DialogModal
            isOpen={isOpen}
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
    </div>
  )
}

export default Files
