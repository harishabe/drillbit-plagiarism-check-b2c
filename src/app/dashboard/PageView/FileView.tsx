'use client'

import { Grid } from '@mui/material'
import { FileView } from '@/app/components'
import { fileData } from 'public/assets/mockData/data'

import { UploadView } from '@/app/components'

export const File = () => {
  return (
    <Grid container item spacing={2}>
      <Grid item xs={6} sm={4} md={3} lg={1.5}>
        <UploadView />
      </Grid>
      {fileData?.map((item, key) => (
        <Grid key={key} item xs={6} sm={4} md={3} lg={1.5}>
          <FileView fileData={item} />
        </Grid>
      ))}
    </Grid>
  )
}
