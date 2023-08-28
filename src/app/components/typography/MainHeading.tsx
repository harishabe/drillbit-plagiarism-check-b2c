'use client'

import React from 'react'
import { Typography } from '@mui/material'

interface IMainHeading {
  title: string
  color?: string
}

const MainHeading = ({ title, color }: IMainHeading) => {
  return (
    <Typography variant="h1" color={color} component="div">
      {title}
    </Typography>
  )
}

export default MainHeading
