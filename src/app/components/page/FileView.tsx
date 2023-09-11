'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Tooltip,
  Typography,
} from '@mui/material'
import { DeleteWarningIcon, DownloadWarningIcon } from 'public/assets'
import { WarningDialog } from '@/app/components'
import {
  FileDownloadOutlined as FileDownloadOutlinedIcon,
  DeleteOutlined as DeleteIcon,
  InfoOutlined as InfoOutlinedIcon,
} from '@mui/icons-material'

import { EllipsisText } from '@/app/components'

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
  const [showDeleteWarning, setShowDeleteWarning] = useState(false)
  const [showDownloadWarning, setShowDownloadWarning] = useState(false)

  const deleteFile = () => {
    setShowDeleteWarning(true)
  }
  const downloadFile = () => {
    setShowDownloadWarning(true)
  }
  const handleYesDeleteWarning = () => {
    setShowDeleteWarning(false)
  }
  const handleCloseDeleteWarning = () => {
    setShowDeleteWarning(false)
  }
  const handleYesDownloadWarning = () => {
    setShowDownloadWarning(false)
  }
  const handleCloseDownloadWarning = () => {
    setShowDownloadWarning(false)
  }

  return (
    <Card className="fileView">
      <CardContent className="card-content">
        <div className="content-center">
          <RenderFileImg FileLogo={fileData.FileLogo ?? ''} />
          <Typography variant="h2">
            <Link href="">{fileData.percentage}%</Link>
          </Typography>
          <Typography variant="body2">{fileData.language}</Typography>
          <EllipsisText value={fileData.name} variant="body1" />
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
                downloadFile()
              }}
            >
              <FileDownloadOutlinedIcon className="icon-font" />
            </IconButton>
          </Tooltip>

          <Tooltip title="Delete" arrow>
            <IconButton
              aria-label="Delete"
              onClick={() => {
                deleteFile()
              }}
            >
              <DeleteIcon className="icon-font" />
            </IconButton>
          </Tooltip>
        </div>
      </CardActions>

      <WarningDialog
        warningIcon={<DeleteWarningIcon />}
        message="Are you sure you want to delete ?"
        handleYes={handleYesDeleteWarning}
        handleNo={handleCloseDeleteWarning}
        isOpen={showDeleteWarning}
      />

      <WarningDialog
        warningIcon={<DownloadWarningIcon />}
        message="Are you sure you want to download ?"
        handleYes={handleYesDownloadWarning}
        handleNo={handleCloseDownloadWarning}
        isOpen={showDownloadWarning}
      />
    </Card>
  )
}
export default FileView
