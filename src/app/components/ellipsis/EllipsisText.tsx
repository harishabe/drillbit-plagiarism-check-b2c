'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Typography, Tooltip, TypographyTypeMap, Link } from '@mui/material'

import '../component.scss'

interface EllipsisTextProps {
  value: string
  isLink?: boolean
  variant?: TypographyTypeMap['props']['variant']
  handleNavigate?: () => void
}

const EllipsisText = ({
  value,
  isLink,
  variant,
  handleNavigate,
}: EllipsisTextProps) => {
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
            <Link
              variant={variant || 'body1'}
              ref={textElement}
              component="div"
              onMouseEnter={checkTextOverflow}
              className="linkFieldEllipsis"
              onClick={handleNavigate}
            >
              {value}
            </Link>
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
