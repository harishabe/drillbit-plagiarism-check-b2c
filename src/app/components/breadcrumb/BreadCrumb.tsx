'use client'

import React from 'react'
import Link from 'next/link'
import { Typography, Breadcrumbs } from '@mui/material'
import { ChevronRight as ChevronRightIcon } from '@mui/icons-material'

interface IBreadCrumbProps {
  active: boolean
  link: string
  name: string
}

const LinkColor: string = '#777E89'

const BreadCrumb = ({ item }: { item: IBreadCrumbProps[] }) => {
  return (
    <div className="breadCrumb" role="presentation">
      <Breadcrumbs
        separator={<ChevronRightIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {item.map((menuItem: IBreadCrumbProps, index: number) => (
          <div key={index}>
            {menuItem.active === false ? (
              <Link color={LinkColor} href={menuItem.link}>
                {menuItem.name}
              </Link>
            ) : (
              <Typography className="active">{menuItem.name}</Typography>
            )}
          </div>
        ))}
      </Breadcrumbs>
    </div>
  )
}

export default BreadCrumb
