'use client'
import React, { useState } from 'react'
import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Tooltip,
  Typography,
} from '@mui/material'
import Link from 'next/link'
import { DeleteWarningIcon, DownloadWarningIcon } from 'public/assets'
import { WarningDialog } from '@/app/components'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined'
import DeleteIcon from '@mui/icons-material/DeleteOutlined'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'

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
          <Typography variant="body1">
            <EllipsisText value={fileData.name} />
          </Typography>
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
      {showDeleteWarning && (
        <WarningDialog
          warningIcon={<DeleteWarningIcon />}
          message="Are you sure you want to delete ?"
          handleYes={handleYesDeleteWarning}
          handleNo={handleCloseDeleteWarning}
          isOpen={true}
        />
      )}
      {showDownloadWarning && (
        <WarningDialog
          warningIcon={<DownloadWarningIcon />}
          message="Are you sure you want to download ?"
          handleYes={handleYesDownloadWarning}
          handleNo={handleCloseDownloadWarning}
          isOpen={true}
        />
      )}
    </Card>
  )
}
export default FileView
