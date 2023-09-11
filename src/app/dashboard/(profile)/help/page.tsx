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
      name: `Help`,
      link: '',
      active: true,
    },
  ]
  
const Help = () => {
  return (
    
    <div className='help'>
    <Navbar />
    <div className='breadcrumb'>
            <BreadCrumb item={HelpBreadCrumb} />
    </div>
    <Card className='help-card'>
    <CardContent >
    <div className='content'>
      <Typography  variant="h1" >
       Personal
      </Typography>
      <Typography  variant="body1" >
        <p> <a href="https://www.drillbitplagiarism.com/userGuide/DrillBit%20Organization%20user%20guide%20-%202022.pdf"><u> Tutorial PDF download</u></a></p>
      </Typography>
      <Typography  variant="body1">
        <p> <a href="https://www.youtube.com/watch?v=IsY-RZrM31A"  target="_blank"> <u> Video tutorial</u> </a></p>
      </Typography>
      
      </div>
    </CardContent>
  </Card>
  </div>
 
  )
}

export default Help