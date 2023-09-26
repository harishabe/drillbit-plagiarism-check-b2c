'use client'

import React from 'react'
import { Control, FieldValues, Controller } from 'react-hook-form'

import { TextField, InputLabel } from '@mui/material'

import './element.scss'

interface IRules {
  [key: string]:
    | number
    | string
    | boolean
    | { [key: string]: RegExp | string | number | boolean }
}

interface InputTextFieldProps {
  control: Control<FieldValues>
  field: {
    id: string
    fieldType: string
    type?: string
    name?: string
    label: string
    info?: string
    rules?: IRules
  }
}

const InputTextField = ({ control, field }: InputTextFieldProps) => {
  return (
    <div className="form-element">
      <InputLabel>{field.label}</InputLabel>
      <Controller
        name={field.name ?? ''}
        control={control}
        defaultValue=""
        rules={field.rules}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => {
          return (
            <TextField
              className="mt-10"
              margin="normal"
              type={field.type}
              onChange={onChange}
              onBlur={onBlur}
              error={!!error}
              value={value}
              fullWidth
              name={field.name}
              id={field.name}
              variant="outlined"
              helperText={error ? error.message : field.info}
              inputProps={{
                style: {
                  padding: '0.75rem 0.875rem',
                },
              }}
            />
          )
        }}
      />
    </div>
  )
}

export default InputTextField
