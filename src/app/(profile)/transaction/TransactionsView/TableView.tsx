import * as React from 'react'
import {
  Table,
  TableContainer,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from '@mui/material'
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
}

const PaymentSubmissionTable = ({
  headerdata,
  purchaseData,
}: IPurchaseprops) => {
  return (
    <TableContainer component={Paper} elevation={2}>
      <Table>
        <TableHead>
          <>
            {purchaseData?.map((row: IPurchaseData) => {
              return (
                <TableRow className="mt07">
                  {headerdata?.map((column: IHeaderData) => {
                    let color
                    if (column.id === 'status' && row.status === 'Success') {
                      color = '#58AD08'
                    } else if (
                      column.id === 'status' &&
                      row.status === 'Pending'
                    ) {
                      color = '#BDB800'
                    } else if (
                      column.id === 'status' &&
                      row.status === 'Failed'
                    ) {
                      color = '#F96969'
                    } else {
                      color = ''
                    }
                    return (
                      <TableCell>
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
                      </TableCell>
                    )
                  })}
                </TableRow>
              )
            })}
          </>
        </TableHead>
      </Table>
    </TableContainer>
  )
}

export default PaymentSubmissionTable
