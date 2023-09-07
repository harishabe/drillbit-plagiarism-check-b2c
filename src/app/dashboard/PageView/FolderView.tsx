'use client'

import { Grid } from '@mui/material'
import { FolderView } from '@/app/components'
import { folderData } from 'public/assets/mockData/data'

export const Folder = () => {
  return (
    <Grid container item spacing={2}>
      {folderData?.map((item, key) => (
        <Grid key={key} item xs={6} sm={4} md={3} lg={1.5}>
          <FolderView folderData={item} />
        </Grid>
      ))}
    </Grid>
  )
}
