import React from 'react'
import Link from 'next/link'
import { InputLabel } from '@mui/material'
import './element.scss'

interface IFieldProps {
  label: string
  align?: string
  path?: string
}

const LinkField = ({ field }: { field: IFieldProps }) => {
  return (
    <div className="form-element">
      <div className="link-field">
        <InputLabel>
          <Link href={field.path ?? ''}>{field.label}</Link>
        </InputLabel>
      </div>
    </div>
  )
}

export default LinkField
