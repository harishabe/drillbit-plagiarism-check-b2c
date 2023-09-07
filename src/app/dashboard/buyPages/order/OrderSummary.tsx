'use client'

import { Card, CardContent, Divider, Grid, Typography } from '@mui/material'

interface IPriceDetailsProps {
  amount: number
  currency: string
}

export const OrderSummary = ({
  priceDetails,
}: {
  priceDetails: IPriceDetailsProps
}) => {
  return (
    <Card style={{ padding: '0rem 1rem', marginBottom: '0.5rem' }}>
      <CardContent>
        <Typography variant="h3">Order summary</Typography>
        <Divider />

        <Grid container mt={2}>
          <Grid xs={6}>
            <Typography variant="h4">Amount</Typography>
          </Grid>
          <Grid xs={6}>
            <Typography variant="h4">
              {priceDetails.currency} {priceDetails.amount}
            </Typography>
          </Grid>
        </Grid>
        <Divider />
        <Grid container mt={1}>
          <Grid xs={6}>
            <Typography variant="h4">TAX/VAT/GST(%18)</Typography>
          </Grid>
          <Grid xs={6}>
            <Typography variant="h4">
              {priceDetails.currency} {(priceDetails.amount * 0.18).toFixed(2)}
            </Typography>
          </Grid>
        </Grid>
        <Divider />
        <Grid container mt={1}>
          <Grid xs={6}>
            <Typography variant="h4">Total Amount</Typography>
          </Grid>
          <Grid xs={6}>
            <Typography variant="h4">
              {' '}
              {priceDetails.currency}{' '}
              {priceDetails.amount + priceDetails.amount * 0.18}
            </Typography>
          </Grid>
        </Grid>
        <Divider />
      </CardContent>
    </Card>
  )
}
