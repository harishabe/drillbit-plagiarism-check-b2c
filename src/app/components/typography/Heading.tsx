'use client'

import React from 'react'
import { Typography } from '@mui/material'

interface IHeading {
  title: string
  color?: string
  variants: string
}

const Heading = ({ title, color, variants = 'h1' }: IHeading) => {
  return (
    <Typography variant={variants} color={color} component="div">
      {title}
    </Typography>
  )
}

export default Heading
