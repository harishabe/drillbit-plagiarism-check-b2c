'use client'

import { Card, CardActions, CardContent } from '@mui/material'
import { FolderIcon } from 'public/assets'
import EllipsisText from '@/app/components/ellipsis/Ellipsis'
import './view.scss'

const FolderView = () => {
  return (
    <Card>
      <CardContent className="fileFolderView">
        <div className="content-center">
          <EllipsisText value="Thesis" component={<FolderIcon />} />
        </div>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  )
}
export default FolderView
