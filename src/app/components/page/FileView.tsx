'use client'

import { Card, CardActions, CardContent } from '@mui/material'
import EllipsisText from '@/app/components/ellipsis/Ellipsis'

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
          <EllipsisText
            value={fileData.name}
            component={<RenderFileImg FileLogo={fileData.FileLogo ?? ''} />}
          />
        </div>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  )
}
export default FileView
