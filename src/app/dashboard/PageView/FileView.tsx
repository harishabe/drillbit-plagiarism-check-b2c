'use client'

import { Grid } from '@mui/material'
import { FileView } from '@/app/components'
import { fileData } from 'public/assets/mockData/data'

export const File = () => {
  return (
    <Grid container item spacing={2}>
      {fileData?.map((item) => (
        <Grid item xs={6} sm={4} md={3} lg={1.5}>
          <FileView fileData={item} />
        </Grid>
      ))}
    </Grid>
  )
}
