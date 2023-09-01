'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Typography, Tooltip, TypographyTypeMap } from '@mui/material'

import '../component.scss'

interface EllipsisTextProps {
  value: string
  isLink?: boolean
  variant?: TypographyTypeMap['props']['variant']
}

const EllipsisText = ({ value, isLink, variant }: EllipsisTextProps) => {
  const textElement = useRef<HTMLDivElement | null>(null)
  const [overflowed, setOverflowed] = useState<boolean>(false)

  const checkTextOverflow = () => {
    const element = textElement.current
    if (element) {
      const isOverflowed = element.scrollWidth > element.clientWidth
      setOverflowed(isOverflowed)
    }
  }

  useEffect(() => {
    checkTextOverflow()
    window.addEventListener('resize', checkTextOverflow)
    return () => {
      window.removeEventListener('resize', checkTextOverflow)
    }
  }, [])

  return (
    <>
      {isLink ? (
        <Tooltip title={overflowed ? value : ''} arrow>
          <div className="ellipsisFlex">
            <Typography
              variant={variant || 'body1'}
              ref={textElement}
              component="div"
              onMouseEnter={checkTextOverflow}
              className="linkFieldEllipsis"
            >
              {value}
            </Typography>
          </div>
        </Tooltip>
      ) : (
        <Tooltip title={overflowed ? value : ''} arrow>
          <Typography
            variant={variant || 'body1'}
            component="div"
            ref={textElement}
            className="ellipsis"
            onMouseEnter={checkTextOverflow}
          >
            {value}
          </Typography>
        </Tooltip>
      )}
    </>
  )
}
export default EllipsisText
