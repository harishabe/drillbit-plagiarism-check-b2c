import { MouseEvent } from 'react'
import { Card, CardContent, Typography } from '@mui/material'

import AddOutlinedIcon from '@mui/icons-material/AddOutlined'

import './view.scss'

interface IUploadViewProps {
  title: string
  handleUpload: () => void
}

const UploadView = ({ title, handleUpload }: IUploadViewProps) => {
  return (
    <Card className="uploadFileView">
      <CardContent>
        <label htmlFor="file-upload" className="pointer">
          <div className="upload-border">
            <AddOutlinedIcon fontSize="large" />
            <Typography variant="body2">{title}</Typography>
          </div>
        </label>
        <input
          type="file"
          className="display-none"
          id="file-upload"
          onClick={handleUpload}
        />
      </CardContent>
    </Card>
  )
}

export default UploadView
