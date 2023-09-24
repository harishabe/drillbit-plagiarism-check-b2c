import React from 'react'
import { TextField, InputLabel } from '@mui/material'
import { Controller, Control, FieldValues } from 'react-hook-form'
import { handleKeyPress } from 'public/assets/mockData/data'
import './element.scss'

interface InputNumberFieldProps {
  control: Control<FieldValues>
  field: {
    name?: string
    label: string
    disabled?: boolean
    info?: string
    errorMsg?: string
    required?: boolean
    message?: string
  }
}

const InputNumberField = ({ control, field }: InputNumberFieldProps) => {
  return (
    <>
      <InputLabel>{field.label}</InputLabel>
      <Controller
        name={field.name || ''}
        control={control}
        defaultValue=""
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <div className="form-element">
            <div className="file">
              <TextField
                className="mt-5"
                margin="normal"
                type="number"
                onChange={onChange}
                onBlur={onBlur}
                error={!!error}
                value={value}
                fullWidth
                onKeyPress={handleKeyPress}
                disabled={field.disabled}
                name={field.name}
                id={field.name}
                variant="outlined"
                helperText={error ? field.message : field.info}
                inputProps={{
                  min: 0,
                  className: 'p-12-14',
                }}
              />
            </div>
          </div>
        )}
        rules={{
          required: field.required ? 'This field is required' : undefined,
        }}
      />
    </>
  )
}

export default InputNumberField
