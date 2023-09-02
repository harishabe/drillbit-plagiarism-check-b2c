import * as React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material'
import Typography, { TypographyTypeMap } from '@mui/material/Typography'
import { TableSkeleton } from '@/app/components'

interface ITableheader {
  id: string
}

interface ITablebody {
  id: number
  name: string
  title: string
  file: string
  percent: number
  date: string
}

interface ITableprops {
  tableHeader: ITableheader[]
  tableBody: ITablebody[]
  isLoading?: boolean
}

interface ITypography {
  variant?: TypographyTypeMap['props']['variant']
  fontSize?: string
  fontWeight?: number
  children: any
}

const CustomTypography = ({
  variant = 'body2',
  fontSize = '0.875rem',
  fontWeight = 500,
  children,
}: ITypography) => {
  return (
    <Typography variant={variant} style={{ fontSize, fontWeight }}>
      {children}
    </Typography>
  )
}

const CommonTable = ({ tableHeader, tableBody, isLoading }: ITableprops) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {tableHeader?.map((item: ITableheader) => (
              <TableCell component="th" scope="row">
                <Typography
                  variant="body1"
                  fontSize="0.875rem"
                  fontWeight={900}
                >
                  {item.id}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading ? (
            <TableSkeleton
              isCheckbox={false}
              tableDataCount={tableHeader.length}
            />
          ) : (
            <>
              {tableBody.map((row: ITablebody) => (
                <TableRow key={row.name}>
                  <TableCell>
                    <CustomTypography>{row.id}</CustomTypography>
                  </TableCell>
                  <TableCell>
                    <CustomTypography>{row.name}</CustomTypography>
                  </TableCell>
                  <TableCell>
                    <CustomTypography>{row.title}</CustomTypography>
                  </TableCell>
                  <TableCell>
                    <CustomTypography>{row.file}</CustomTypography>
                  </TableCell>
                  <TableCell>
                    <CustomTypography>{row.percent}</CustomTypography>
                  </TableCell>
                  <TableCell>
                    <CustomTypography>{row.date}</CustomTypography>
                  </TableCell>
                </TableRow>
              ))}
            </>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CommonTable
