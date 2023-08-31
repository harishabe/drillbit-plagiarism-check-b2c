import { Card, CardContent, Typography } from '@mui/material'

import AddOutlinedIcon from '@mui/icons-material/AddOutlined'

import './view.scss'

const UploadView = ({ handeUpload }: { handeUpload: () => void }) => {
  return (
    <Card className="uploadFileView">
      <CardContent>
        <label htmlFor="file-upload" className="pointer">
          <div className="upload-border">
            <AddOutlinedIcon fontSize="large" />
            <Typography variant="body2">Upload file</Typography>
          </div>
        </label>
        <input
          type="file"
          className="display-none"
          id="file-upload"
          onClick={handeUpload}
        />
      </CardContent>
    </Card>
  )
}

export default UploadView
