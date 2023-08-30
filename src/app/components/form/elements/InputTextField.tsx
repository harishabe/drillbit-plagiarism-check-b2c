import React from 'react'
import { TextField, InputLabel } from '@mui/material'

interface IFieldProps {
  label: string
  type?: string
  name?: string
}

const InputTextField = ({ field }: { field: IFieldProps }) => {
  const { label, type, name } = field
  return (
    <div>
      <InputLabel>{label}</InputLabel>
      <TextField
        style={{ marginTop: '5px' }}
        fullWidth
        margin="normal"
        size="small"
        variant="outlined"
        type={type}
        name={name}
        inputProps={{
          style: {
            padding: '12px 14px',
          },
        }}
      />
    </div>
  )
}

export default InputTextField
