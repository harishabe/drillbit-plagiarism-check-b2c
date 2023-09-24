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
    currency: 'INR',
  })

  const handlePrice = (e: MouseEvent<HTMLElement>, price: ISelected) => {
    e.preventDefault()
    setSelectedPrice(price)
  }

  const initPayment = (data) => {
    const options = {
      key: 'rzp_test_qUjQJgbOOOxJpa',
      amount: data.amount,
      currency: data.currency,
      name: 'Harisa',
      description: 'Test Transaction',
      order_id: data.id,
      handler: async (response) => {
        console.log('after-paynow', response)
        try {
          const verifyUrl = 'http://localhost:8081/api/payment/verify'
          const { data } = await fetch(verifyUrl, {
            method: 'POST',
            body: response,
          })
          console.log(data)
        } catch (error) {
          console.log('initPayment', error)
        }
      },
      theme: {
        color: '#3399cc',
      },
    }
    const rzp1 = new window.Razorpay(options)
    rzp1.open()
  }

  const handlePayment = async () => {
    try {
      const orderUrl =
        'https://onlineuat.drillbitplagiarismcheck.com:8080/razorpay/createorder'
      const { data } = await fetch(orderUrl, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: selectedPrice.amount }),
      })
      console.log('handlePayment', data)
      initPayment(data.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
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
            <Button variant="contained" fullWidth onClick={handlePayment}>
              Buy Now
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default BuyPages
