'use client'

import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Tooltip,
} from '@mui/material'
import { FolderIcon } from 'public/assets'
import { EllipsisText } from '@/app/components'

import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined'
import DeleteIcon from '@mui/icons-material/DeleteOutlined'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'

import './view.scss'

interface IFolderDataProps {
  name: string
  createdDate: string
  count: number
}

const FolderView = ({ folderData }: { folderData: IFolderDataProps }) => {
  const { count, name, createdDate } = folderData
  return (
    <Card className="folderView">
      <CardContent className="card-content">
        <div className="content-center">
          <FolderIcon />
          <EllipsisText value={name + '(' + count + ')'} variant="body1" />
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
export default FolderView
