'use client'

import React, { ReactNode, MouseEvent } from 'react'
import {
  IconButton,
  DialogTitle,
  Dialog,
  Button,
  Tooltip,
  DialogContent,
  DialogContentText,
  Typography,
} from '@mui/material'
import { Close as CloseIcon } from '@mui/icons-material'
import './dialogModal.scss'

interface IDialogprops {
  isOpen: boolean
  message: string
  warningIcon: ReactNode
  handleYes: (event: MouseEvent<HTMLButtonElement>) => void
  handleNo: (event: MouseEvent<HTMLButtonElement>) => void
}

const WarningDialog = ({
  isOpen,
  message,
  warningIcon,
  handleYes,
  handleNo,
}: IDialogprops) => {
  return (
    <Dialog className="dialogBoxModal" open={isOpen} onClose={handleNo}>
      <DialogTitle>
        <Tooltip title="Close" arrow>
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
            <Typography className="message-container">{message}</Typography>
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
