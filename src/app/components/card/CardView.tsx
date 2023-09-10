'use client'

import React from 'react'
import { Card, CardContent } from '@mui/material'

interface ICardViewprops {
  children: React.JSX.Element
  cardClassName?: string
  cardContentClassName?: string
}

const CardView = ({
  children,
  cardClassName,
  cardContentClassName,
}: ICardViewprops) => {
  return (
    <Card className={cardClassName}>
      <CardContent className={cardContentClassName}>{children}</CardContent>
    </Card>
  )
}

export default CardView
