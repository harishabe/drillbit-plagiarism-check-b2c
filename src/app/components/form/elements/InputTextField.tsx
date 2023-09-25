'use client'

import React, { useState, useEffect } from 'react'
import { TextField, InputLabel } from '@mui/material'
import { Control, FieldValues, Controller } from 'react-hook-form'
import './element.scss'

interface InputTextFieldProps {
  control: Control<FieldValues>
  field: {
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
}

const InputTextField = ({ control, field }: InputTextFieldProps) => {
  const [regex, setRegex] = useState(/^/)

  useEffect(() => {
    if (field.name === 'newPassword') {
      setRegex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
    }
    if (field.name === 'confirmPassword') {
      setRegex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
    }
    if (field.name === 'email' || field.name === 'adminEmail') {
      setRegex(/^[A-Z0-9._%+-]{2,64}@[A-Z0-9.-]{2,255}\.[A-Z0-9-]{2,63}$/i)
    }
  }, [field])

  return (
    <div>
      <InputLabel>{field.label}</InputLabel>
      <Controller
        name={field.name ?? ''}
        control={control}
        defaultValue=""
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => {
          return (
            <TextField
              style={{ marginTop: '5px' }}
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
              FormHelperTextProps={{ classes: { root: '' } }}
              inputProps={{
                maxLength: field.maxLength,
                minLength: field.minLength,
                style: {
                  padding: '12px 14px',
                },
              }}
            />
          )
        }}
        rules={{
          required: field.required,
          pattern: {
            value: regex,
            message: field.validationMsg ?? '',
          },
        }}
      />
    </div>
  )
}

export default InputTextField
