'use client'
import React, { useState, useEffect, useRef } from 'react'
import { Tooltip } from '@mui/material'
import Typography, { TypographyTypeMap } from '@mui/material/Typography'
import '../component.scss'

interface EllipsisTextProps {
  value: string
  isLink?: boolean
  variant?: TypographyTypeMap['props']['variant']
}

const EllipsisText = ({ value, isLink, variant }: EllipsisTextProps) => {
  const textElement = useRef<HTMLDivElement | null>(null)
  const [overflowed, setOverflowed] = useState(false)

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
    <Tooltip title={overflowed ? value : ''} arrow>
      {isLink ? (
        <div className="ellipsisFlex">
          <Typography
            variant={variant || 'body1'}
            ref={textElement}
            onMouseEnter={checkTextOverflow}
            className="linkFieldEllipsis"
          >
            {value?.charAt(0).toUpperCase() + value?.slice(1)}
          </Typography>
        </div>
      ) : (
        <Typography
          variant={variant || 'body1'}
          component="div"
          ref={textElement}
          className="ellipsis"
          onMouseEnter={checkTextOverflow}
        >
          {value?.charAt(0).toUpperCase() + value?.slice(1)}
        </Typography>
      )}
    </Tooltip>
  )
}
export default EllipsisText
