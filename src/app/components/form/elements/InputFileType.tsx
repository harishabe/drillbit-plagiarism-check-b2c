import React from 'react'
import { Controller, Control, FieldValues } from 'react-hook-form'
import { TextField, InputLabel } from '@mui/material'
import './element.scss'

interface InputFileTypeProps {
  control: Control<FieldValues>
  field: {
    name?: string
    required?: boolean
    label: string
    validationMsg?: string
    info?: string
    message?: string
  }
}

const InputFileType = ({ control, field }: InputFileTypeProps) => {
  return (
    <>
      <InputLabel>{field.label}</InputLabel>
      <Controller
        name={field.name || ''}
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <div className="form-element">
            <div className="file">
              <TextField
                className="mt-5"
                margin="normal"
                type="file"
                onChange={(e) => {
                  const fileInput = e.target as HTMLInputElement
                  if (fileInput.files && fileInput.files.length > 0) {
                    onChange(fileInput.files[0])
                  } else {
                    onChange(null)
                  }
                }}
                fullWidth
                name={field.name}
                id={field.name}
                variant="outlined"
                error={!!error}
                helperText={
                  (value !== undefined &&
                    typeof value === 'object' &&
                    value !== null &&
                    `Last uploaded file: ${value.name}`) ||
                  (error && field.message)
                }
                inputProps={{
                  className: 'p-12-14',
                }}
              />
            </div>
          </div>
        )}
        rules={{
          required: field.required || false,
          pattern: {
            value: /\.(jpg|jpeg|png|gif|pdf|docx)$/i,
            message: field.validationMsg || 'Invalid file format',
          },
        }}
      />
    </>
  )
}

export default InputFileType
