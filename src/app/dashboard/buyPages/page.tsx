'use client'

import { useState, MouseEvent } from 'react'
import { Button, Grid, Typography } from '@mui/material'

import { BreadCrumb, Navbar } from '@/app/components'

import { OrderSummary } from './order/OrderSummary'
import { PriceList } from './order/PriceList'

import './../dashboard.scss'
import './buyPages.scss'

interface ISelected {
  id: number
  pages: string
  amount: number
  currency: string
}

const BuyPagesBreadCrumb = [
  {
    name: 'Dashboard',
    link: '/dashboard',
    active: false,
  },
  {
    name: `Buy Pages`,
    link: '',
    active: true,
  },
]

const BuyPages = () => {
  const [selectedPrice, setSelectedPrice] = useState<ISelected>({
    id: 1,
    pages: '25 pages',
    amount: 5,
    currency: '$',
  })

  const handlePrice = (e: MouseEvent<HTMLElement>, price: ISelected) => {
    e.preventDefault()
    setSelectedPrice(price)
  }

  return (
    <div>
      <Navbar />
      <div className="buyPages">
        <div className="padding-page">
          <div className="buy-page-container">
            <BreadCrumb item={BuyPagesBreadCrumb} />
            <div className="buy-page">Buy your pages</div>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </div>
          <Grid className="price-container" container spacing={3}>
            <Grid item xs={7}>
              <PriceList
                selectedPrice={selectedPrice}
                handlePrice={handlePrice}
              />
            </Grid>
            <Grid item xs={5}>
              <OrderSummary priceDetails={selectedPrice} />
              <Button variant="contained" fullWidth>
                Buy
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  )
}

export default BuyPages
