'use client'

import { MouseEvent } from 'react'
import { Grid, Card } from '@mui/material'
import { pricePagesData } from 'public/assets/mockData/data'

interface ISelectedProps {
  id: number
  amount: number
  currency: string
  pages: string
}

interface IPriceListProps {
  selectedPrice: ISelectedProps
  handlePrice: (e: MouseEvent<HTMLElement>, item: ISelectedProps) => void
}

export const PriceList = ({ selectedPrice, handlePrice }: IPriceListProps) => {
  return (
    <>
      {pricePagesData.map((item) => (
        <Card
          className={`card ${
            selectedPrice.id === item.id ? 'selected-card' : ''
          }`}
          onClick={(e) => handlePrice(e, item)}
        >
          <Grid container>
            <Grid item xs={8}>
              <div
                className={`pages-amount ${
                  selectedPrice.id === item.id ? 'selected-pages-amount' : ''
                }`}
              >
                {item.pages}
              </div>
            </Grid>
            <Grid className="amount-right" item xs={4}>
              <div
                className={`pages-amount ${
                  selectedPrice.id === item.id ? 'selected-pages-amount' : ''
                }`}
              >
                {item.currency}
                {item.amount}
              </div>
            </Grid>
          </Grid>
        </Card>
      ))}
    </>
  )
}
