'use client'

import { Card, CardActions, CardContent } from '@mui/material'
import { EllipsisText } from '@/app/components'

import './view.scss'

interface IFileData {
  name: string
  fileType: string
  FileLogo: () => JSX.Element
}

const RenderFileImg = ({ FileLogo }: { FileLogo: () => JSX.Element }) => {
  return <FileLogo />
}

const FileView = ({ fileData }: { fileData: IFileData }) => {
  return (
    <Card>
      <CardContent className="fileFolderView">
        <div className="content-center">
          <RenderFileImg FileLogo={fileData.FileLogo ?? ''} />
          <EllipsisText value={fileData.name} variant="body1" />
        </div>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  )
}
export default FileView
