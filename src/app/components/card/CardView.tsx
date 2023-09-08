'use client'

import React from 'react'
import { Card, CardContent } from '@mui/material'

interface ICardViewprops {
  children: React.JSX.Element
  height?: number
}

const CardView = ({ children, height }: ICardViewprops) => {
  return (
    <Card style={{ height }}>
      <CardContent>{children}</CardContent>
    </Card>
  )
}

export default CardView
