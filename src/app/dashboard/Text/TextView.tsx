import React from 'react'
import { CommonTable } from '@/app/components'

interface ITablebody {
  id: number
  name: string
  title: string
  file: string
  percent: number
  date: string
}

const columns = [
  { id: 'Paper ID' },
  { id: 'Name' },
  { id: 'Title' },
  { id: 'File' },
  { id: 'Similarity' },
  { id: 'Submisssion date' },
]

function createData(
  id: number,
  name: string,
  title: string,
  file: string,
  percent: number,
  date: string
): ITablebody {
  return { id, name, title, file, percent, date }
}
const rows = [
  createData(123, 'Akshay', 'Thesis', 'File.pdf', 24, '2023-08-18 16:40:26'),
  createData(
    123,
    'Akshay',
    'Project Work',
    'File.pdf',
    37,
    '2023-08-18 16:40:26'
  ),
  createData(
    123,
    'Akshay',
    'Assignment',
    'File.pdf',
    24,
    '2023-08-18 16:40:26'
  ),
  createData(123, 'Akshay', 'Journal', 'File.pdf', 67, '2023-08-18 16:40:26'),
  createData(123, 'Akshay', 'E-book', 'File.pdf', 49, '2023-08-18 16:40:26'),
]

export const TextView = () => {
  return (
    <CommonTable tableHeader={columns} tableBody={rows} isLoading={false} />
  )
}
