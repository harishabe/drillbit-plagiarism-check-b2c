'use client'

import React from 'react'

import { Divider, Typography, Grid } from '@mui/material'
import { BreadCrumb, FileView } from '@/app/components'

import { fileData } from 'public/assets/mockData/data'
import '../dashboard.scss'

const FilesBreadCrumb = [
  {
    name: 'Dashboard',
    link: '/dashboard',
    active: false,
  },
  {
    name: 'Files',
    link: '',
    active: true,
  },
]

export const Files = () => {
  return (
    <div className="dashboard">
      <div className="page-container">
        <BreadCrumb item={FilesBreadCrumb} />
        <Typography variant="h2" className="flex">
          Files(36)
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
        </div>
      </div>
    </div>
  )
}

export default Files
