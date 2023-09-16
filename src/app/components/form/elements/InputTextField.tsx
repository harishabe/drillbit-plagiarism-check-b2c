import React from 'react'
import { TextField, InputLabel } from '@mui/material'
import { Control, FieldValues, useController } from 'react-hook-form'

interface IFieldProps {
  id: string
  fieldType: string
  label: string
  type?: string
  name?: string
  maxLength?: number
  minLength?: number
  required?: boolean
  message?: string
  validationMsg?: string
  info?: string
  path?: string
  align?: string
}

interface InputTextFieldProps {
  control: Control<FieldValues>
  field: IFieldProps
}

const InputTextField = ({ control, field }: InputTextFieldProps) => {
  const emailRegex = /^[A-Z0-9._%+-]{2,64}@[A-Z0-9.-]{2,255}\.[A-Z0-9-]{2,63}$/i

  const {
    field: { onChange, onBlur, value },
    fieldState: { error },
  } = useController({
    name: field.name || '',
    control,
    rules: {
      required: field.required,
      validate: (value) => {
        if (
          field.name === 'username' &&
          value !== '' &&
          !emailRegex.test(value)
        ) {
          return (field.message = field.validationMsg)
        }
      },
    },
  })

  return (
    <div>
      <InputLabel>{field.label}</InputLabel>
      <TextField
        style={{ marginTop: '5px' }}
        fullWidth
        margin="normal"
        size="small"
        variant="outlined"
        type={field.type}
        name={field.name}
        onChange={onChange}
        onBlur={onBlur}
        error={!!error}
        helperText={error ? field.message : field.info}
        value={value}
        inputProps={{
          maxLength: field.maxLength,
          minLength: field.minLength,
          style: {
            padding: '12px 14px',
          },
        }}
      />
    </div>
  )
}

export default InputTextField
