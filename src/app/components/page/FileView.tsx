'use client'

import { Card, CardActions, CardContent, Typography } from '@mui/material'

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
          <Typography variant="body1">{fileData.name}</Typography>
        </div>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  )
}
export default FileView
