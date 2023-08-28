import React from 'react'
import Link from 'next/link'
import { InputLabel } from '@mui/material'

interface IFieldProps {
  label: string
  align?: string
  path?: string
}

const LinkField = ({ field }: { field: IFieldProps }) => {
  return (
    <div style={{ textAlign: 'right' }}>
      <InputLabel>
        <Link href={field.path ?? ''}>{field.label}</Link>
      </InputLabel>
    </div>
  )
}

export default LinkField
