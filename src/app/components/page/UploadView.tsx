import { Card, CardContent, Typography } from '@mui/material'

import AddOutlinedIcon from '@mui/icons-material/AddOutlined'

import './view.scss'

const UploadView = () => {
  return (
    <Card className="uploadFileView">
      <CardContent>
        <label htmlFor="file-upload" className="pointer">
          <div className="upload-border">
            <AddOutlinedIcon fontSize="large" />
            <Typography variant="body2">Upload file</Typography>
          </div>
        </label>
        <input type="file" id="file-upload" className="display-none" />
      </CardContent>
    </Card>
  )
}

export default UploadView
