'use client'

import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Tooltip,
} from '@mui/material'

import {
  FileDownloadOutlined as FileDownloadOutlinedIcon,
  DeleteOutlined as DeleteIcon,
  InfoOutlined as InfoOutlinedIcon,
} from '@mui/icons-material'

import { FolderIcon } from 'public/assets'
import { EllipsisText } from '@/app/components'

import './view.scss'

interface IFolderDataProps {
  name: string
  count: number
}

const FolderView = ({
  folderData,
  isLink,
  handleNavigate,
}: {
  folderData: IFolderDataProps
  isLink: boolean
  handleNavigate: () => void
}) => {
  const { count, name } = folderData

  return (
    <Card className="folderView">
      <CardContent className="card-content">
        <div className="content-center">
          <FolderIcon />
          <EllipsisText
            value={name + '(' + count + ')'}
            variant="body1"
            isLink={isLink}
            handleNavigate={handleNavigate}
          />
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
