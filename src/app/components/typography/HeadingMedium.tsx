'use client'

import React from 'react'
import { Typography } from '@mui/material'

interface IHeadingMedium {
  title: string
  color?: string
}

const HeadingMedium = ({ title, color }: IHeadingMedium) => {
  return (
    <Typography variant="h3" color={color} component="div">
      {title}
    </Typography>
  )
}

export default HeadingMedium
