'use client'

import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Tooltip,
  Typography,
} from '@mui/material'
import Link from 'next/link'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined'
import DeleteIcon from '@mui/icons-material/DeleteOutlined'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'

import './view.scss'

interface IFileData {
  name: string
  fileType: string
  FileLogo: () => JSX.Element
  percentage: number
  language: string
}

const RenderFileImg = ({ FileLogo }: { FileLogo: () => JSX.Element }) => {
  return <FileLogo />
}

const FileView = ({ fileData }: { fileData: IFileData }) => {
  return (
    <Card className="fileView">
      <CardContent className="card-content">
        <div className="content-center">
          <RenderFileImg FileLogo={fileData.FileLogo ?? ''} />
          <Typography variant="h2">
            <Link href="">{fileData.percentage}%</Link>
          </Typography>
          <Typography variant="body2">{fileData.language}</Typography>
          <Typography variant="body1">{fileData.name}</Typography>
        </div>
      </CardContent>
      <CardActions>
        <div className="right">
          <Tooltip title="Info" arrow>
            <IconButton
              aria-label="Info"
              onClick={() => {
                return 0
              }}
            >
              <InfoOutlinedIcon className="icon-font" />
            </IconButton>
          </Tooltip>
        </div>
        <div className="left">
          <Tooltip title="Download" arrow>
            <IconButton
              aria-label="Download"
              onClick={() => {
                return 0
              }}
            >
              <FileDownloadOutlinedIcon className="icon-font" />
            </IconButton>
          </Tooltip>

          <Tooltip title="Delete" arrow>
            <IconButton
              aria-label="Delete"
              onClick={() => {
                return 0
              }}
            >
              <DeleteIcon className="icon-font" />
            </IconButton>
          </Tooltip>
        </div>
      </CardActions>
    </Card>
  )
}
export default FileView
