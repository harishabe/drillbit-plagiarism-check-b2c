'use client'

import { Card, CardContent, Typography } from '@mui/material'
import { Navbar,BreadCrumb } from '@/app/components'
import './page.scss'

const HelpBreadCrumb = [
    {
      name: 'Dashboard',
      link: '/dashboard',
      active: false,
    },
    {
      name: `help`,
      link: '',
      active: true,
    },
  ]
  


const Help = () => {
  return (
    <div className='help'>
    <Navbar />
    <div style={{ marginBottom: '0.5rem' }}>
            <BreadCrumb item={HelpBreadCrumb} />
    </div>
    <Card >
    <CardContent >
    <div className='content'>
      <Typography  variant="body1" >
       Help
      </Typography>
      <Typography  variant="body1">
        <p>Reference : <a href="https://www.youtube.com/watch?v=IsY-RZrM31A"  target="_blank"> <u>YouTube Link</u> </a></p>
      </Typography>
      <Typography  variant="body1" >
        Refererence: <a href="https://www.drillbitplagiarism.com/userGuide/DrillBit%20Organization%20user%20guide%20-%202022.pdf"><u> PDF Document</u></a>
      </Typography>
      </div>
    </CardContent>
  </Card>
  </div>
  )
}




export default Help