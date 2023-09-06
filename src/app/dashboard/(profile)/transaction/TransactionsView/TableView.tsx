import React from 'react'
import { Typography, Card, IconButton, Tooltip, Grid } from '@mui/material'
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined'
import '../page.scss'

interface IHeaderData {
  id: string
  label: string
}

interface IPurchaseData {
  transaction_id?: string
  no_of_pages?: string
  date?: string
  amount?: string
  method?: string
  paper_id?: string
  file_name?: string
  no_of_words?: string
  status?: string
}

interface IPurchaseprops {
  headerdata: IHeaderData[]
  purchaseData: IPurchaseData[]
  handleFilter: () => void
}

const PaymentSubmissionTable = ({
  headerdata,
  purchaseData,
  handleFilter,
}: IPurchaseprops) => {
  return (
    <>
      <Grid container spacing={1}>
        <Grid md={12} sm={12} sx={{ textAlign: 'end' }}>
          <Tooltip title="Filter" arrow>
            <IconButton onClick={handleFilter} size="small">
              <FilterListOutlinedIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>

      {purchaseData?.map((row: IPurchaseData) => {
        return (
          <Card className="mt05" elevation={3}>
            <div className="flex">
              {headerdata?.map((column: IHeaderData) => {
                let color
                if (column.id === 'status' && row.status === 'Success') {
                  color = '#58AD08'
                } else if (column.id === 'status' && row.status === 'Pending') {
                  color = '#BDB800'
                } else if (column.id === 'status' && row.status === 'Failed') {
                  color = '#F96969'
                } else {
                  color = ''
                }
                return (
                  <div className="m05">
                    <Typography variant="body2" className="typo-id">
                      {column.label}
                    </Typography>
                    <Typography
                      variant="body2"
                      className="typo-title"
                      sx={{ color: color }}
                    >
                      {column.id === 'id' && row?.transaction_id}
                      {column.id === 'pages' && row?.no_of_pages}
                      {column.id === 'date' && row?.date}
                      {column.id === 'amount' && row?.amount}
                      {column.id === 'method' && row?.method}
                      {column.id === 'status' && row?.status}
                      {column.id === 'paper_id' && row?.paper_id}
                      {column.id === 'file_name' && row?.file_name}
                      {column.id === 'no_of_words' && row?.no_of_words}
                    </Typography>
                  </div>
                )
              })}
            </div>
          </Card>
        )
      })}
    </>
  )
}

export default PaymentSubmissionTable
