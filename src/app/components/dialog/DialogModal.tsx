'use client'

import React, { ReactNode, MouseEvent } from 'react'
import Draggable from 'react-draggable'
import { Breakpoint } from '@mui/system'
import {
  Paper,
  PaperProps,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  IconButton,
  Tooltip,
  Typography,
} from '@mui/material'
import { Close as CloseIcon } from '@mui/icons-material'

import './dialogModal.scss'

interface IDialogModalProps {
  headingTitle: string
  isOpen: boolean
  fullWidth?: boolean
  maxWidth?: false | Breakpoint
  handleClose: (event: MouseEvent<HTMLButtonElement>) => void
  children: ReactNode
}

function PaperComponent(props: PaperProps) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  )
}

const DialogModal = ({
  isOpen,
  headingTitle,
  fullWidth = true,
  maxWidth = 'md',
  handleClose,
  children,
}: IDialogModalProps) => {
  return (
    <Dialog
      className="dialogBoxModal"
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      open={isOpen}
      onClose={handleClose}
      PaperComponent={PaperComponent}
      aria-labelledby="draggable-dialog-title"
    >
      <DialogTitle className="move">
        <Typography variant="h2">{headingTitle}</Typography>
        <Tooltip title="Close" arrow>
          <IconButton
            className="close-icon"
            aria-label="close"
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        </Tooltip>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>{children}</DialogContentText>
      </DialogContent>
    </Dialog>
  )
}

export default DialogModal
