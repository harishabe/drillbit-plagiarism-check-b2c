'use client'
import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { Tooltip } from '@mui/material'
import Typography, { TypographyTypeMap } from '@mui/material/Typography'
import '../component.scss'

interface EllipsisTextProps {
  value: string
  isLink?: boolean
  isFolder?: boolean
  maxLength?: number
  component?: React.ReactNode
  variant?: TypographyTypeMap['props']['variant']
  pathname?: string
  queryData?: Record<string, any>
}

const EllipsisText: React.FC<EllipsisTextProps> = ({
  value,
  isLink,
  isFolder,
  maxLength,
  component,
  variant,
  pathname,
  queryData,
}) => {
  const router = useRouter()
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

  const handleNavigate = () => {
    let queryString = ''
    if (queryData) {
      Object.keys(queryData).forEach((key, index) => {
        if (index === 0) {
          queryString += `?${key}=${queryData[key]}`
        } else {
          queryString += `&${key}=${queryData[key]}`
        }
      })
    }
    const fullPath = queryString ? `${pathname}${queryString}` : pathname
    router?.push(fullPath || '')
  }

  return (
    <Tooltip
      title={
        overflowed ||
        (isFolder && maxLength !== undefined && value?.length > maxLength)
          ? value
          : ''
      }
      arrow
    >
      {isLink ? (
        <div className="ellipsis">
          <div className="componentContainerEllipsis">{component}</div>{' '}
          <Typography
            onClick={handleNavigate}
            variant={variant || 'body1'}
            ref={textElement}
            onMouseEnter={checkTextOverflow}
            className="linkFieldEllipsis"
          >
            {isFolder && maxLength !== undefined
              ? value?.length > maxLength
                ? (value?.charAt(0).toUpperCase() + value?.slice(1)).substring(
                    0,
                    maxLength
                  ) + '...'
                : value?.charAt(0).toUpperCase() + value?.slice(1)
              : value?.charAt(0).toUpperCase() + value?.slice(1)}
          </Typography>
        </div>
      ) : (
        <Typography
          variant={variant || 'body1'}
          component="div"
          ref={textElement}
          style={{
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
          }}
          onMouseEnter={checkTextOverflow}
        >
          <div className="componentContainerEllipsis">{component}</div>{' '}
          {isFolder && maxLength !== undefined
            ? value?.length > maxLength
              ? (value?.charAt(0).toUpperCase() + value?.slice(1)).substring(
                  0,
                  maxLength
                ) + '...'
              : value?.charAt(0).toUpperCase() + value?.slice(1)
            : value?.charAt(0).toUpperCase() + value?.slice(1)}
        </Typography>
      )}
    </Tooltip>
  )
}
export default EllipsisText
