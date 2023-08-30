'use client'

import { Card, CardActions, CardContent } from '@mui/material'
import { FolderIcon } from 'public/assets'
import { EllipsisText } from '@/app/components'
import './view.scss'

const FolderView = () => {
  return (
    <Card className="folderView">
      <CardContent className="card-content">
        <div className="content-center">
          <FolderIcon />
          <EllipsisText value="Thesis(5)" variant="body1" />
        </div>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  )
}
export default FolderView
