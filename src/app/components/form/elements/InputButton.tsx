import React from 'react'
import Button from '@mui/material/Button'
import './element.scss'

interface FieldProps {
  label: string
  type?: string
}

const InputButton = ({ field }: { field: FieldProps }) => {
  const { label } = field
  return (
    <div className="form-element">
      <div className="mt16">
        <Button fullWidth size="medium" variant="contained" color="primary">
          {label}
        </Button>
      </div>
    </div>
  )
}

export default InputButton
