'use client'

import React from 'react'
import Link from 'next/link'
import { Grid, Typography } from '@mui/material'
import { Navbar, BreadCrumb, CardView } from '@/app/components'
import '../../dashboard.scss'

const HelpBreadCrumb = [
  {
    name: 'Dashboard',
    link: '/dashboard',
    active: false,
  },
  {
    name: 'Help',
    link: '',
    active: true,
  },
]

const Help = () => {
  const helpData = [
    {
      pdfLinkTitle: 'Tutorial PDF download',
      pdfLink:
        'https://www.drillbitplagiarism.com/userGuide/DrillBit%20Organization%20admin%20user%20guide%20-%202022.pdf',
      videoTitle: 'Video tutorial',
      videoLink: 'https://youtu.be/pL2S4yKvrNM',
    },
  ]

  return (
    <div>
      <Navbar />
      <div className="dashboard">
        <div className="page-container">
          <div className="mt-05">
            <BreadCrumb item={HelpBreadCrumb} />
          </div>
          <Grid container spacing={1}>
            <Grid item md={4} sm={12}>
              <CardView>
                <>
                  <Typography gutterBottom variant="h1" component="div">
                    Help
                  </Typography>
                  {helpData?.map((item, index) => {
                    return (
                      <>
                        <Link href={item?.pdfLink} target="_blank">
                          <Typography variant="body1" className="link-title">
                            {item?.pdfLinkTitle}
                          </Typography>
                        </Link>
                        <Link href={item?.videoLink} target="_blank">
                          <Typography variant="body1" className="link-title">
                            {item?.videoTitle}
                          </Typography>
                        </Link>
                      </>
                    )
                  })}
                </>
              </CardView>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  )
}

export default Help
