import * as React from 'react'
import {
  IconButton,
  DialogTitle,
  Dialog,
  Button,
  Tooltip,
  DialogContent,
  DialogContentText,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

interface IDialogprops {
  isOpen: boolean
  message: string
  warningIcon: React.ReactNode
  handleYes: (event: React.MouseEvent<HTMLButtonElement>) => void
  handleNo: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const WarningDialog = ({
  isOpen,
  message,
  warningIcon,
  handleYes,
  handleNo,
}: IDialogprops) => {
  return (
    <Dialog open={isOpen} onClose={handleNo}>
      <DialogTitle>
        <Tooltip title="close" arrow>
          <IconButton
            aria-label="close"
            onClick={handleNo}
            className="close-icon"
          >
            <CloseIcon />
          </IconButton>
        </Tooltip>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <div className="warning-container">
            <div>{warningIcon}</div>
            <div className="message-container">{message}</div>
            <div className="button-container">
              <Button onClick={handleNo} variant="outlined" className="mr-8">
                No
              </Button>
              <Button onClick={handleYes} variant="contained">
                Yes
              </Button>
            </div>
          </div>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  )
}

export default WarningDialog
