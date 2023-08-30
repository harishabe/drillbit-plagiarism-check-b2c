'use client'

import { Card, CardActions, CardContent, Typography } from '@mui/material'
import { FolderIcon } from 'public/assets'

import './view.scss'

const FolderView = () => {
  return (
    <Card className="folderView">
      <CardContent className="card-content">
        <div className="content-center">
          <FolderIcon />
          <Typography variant="body1">Thesis(5)</Typography>
        </div>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  )
}
export default FolderView
