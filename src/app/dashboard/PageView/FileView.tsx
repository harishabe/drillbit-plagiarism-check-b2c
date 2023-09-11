'use client'

import React, { useState } from 'react'
import { Grid } from '@mui/material'
import { FileView } from '@/app/components'
import { fileData } from 'public/assets/mockData/data'

import { UploadView, DialogModal } from '@/app/components'
import '../dashboard.scss'

export const File = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const handeUpload = () => {
    setIsOpenModal(!isOpenModal)
  }

  const handleClose = () => {
    setIsOpenModal(false)
  }

  return (
    <div>
      <DialogModal
        headingTitle="Upload Files"
        isOpen={isOpenModal}
        handleClose={handleClose}
        fullWidth={true}
        maxWidth="lg"
      >
        <div>Hello File upload</div>
      </DialogModal>
      <Grid container item spacing={2}>
        <Grid item xs={6} sm={4} md={3} lg={1.5}>
          <UploadView handeUpload={handeUpload} />
        </Grid>
       
        {fileData?.map((item, key) => (
          <Grid className='file-folder' key={key} item xs={6} sm={4} md={3} lg={1.5}>
            <FileView fileData={item} />
          </Grid>
        ))}
        
       
      </Grid>
      </div>
    
  )
}
