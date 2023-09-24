import React, { KeyboardEvent } from 'react'
import { Controller, FieldValues, Control } from 'react-hook-form'
import { TextField, InputLabel, Stack } from '@mui/material'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { DatePicker, LocalizationProvider } from '@mui/lab'
import './element.scss'

interface InputDatePickerProps {
  control: Control<FieldValues>
  field: {
    name?: string
    label: string
    dateLabel?: string
    nextDate?: boolean
    prevDate?: boolean
    minDate?: Date
    maxDate?: Date
    info?: string
    required?: boolean
    message?: string
  }
}

const InputDatePicker = ({ control, field }: InputDatePickerProps) => {
  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault()
  }

  return (
    <>
      <InputLabel>{field.label}</InputLabel>
      <Controller
        name={field.name || ''}
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
              <DatePicker
                inputFormat="dd/MM/yyyy"
                label={field.dateLabel}
                value={value === undefined ? null : value}
                onChange={onChange}
                disableFuture={field.nextDate}
                disablePast={field.prevDate}
                minDate={field.minDate}
                maxDate={field.maxDate}
                renderInput={(params) => (
                  <div className="form-element">
                    <div className="datepicker">
                      <TextField
                        margin="normal"
                        className="mt-5"
                        onKeyDown={onKeyDown}
                        value={
                          params.inputProps?.value === undefined || ''
                            ? null
                            : params.inputProps?.value
                        }
                        fullWidth
                        size="small"
                        error={!!value}
                        helperText={error ? field.message : field.info}
                        {...params}
                        inputProps={{
                          className:'p-12',
                        }}
                      />
                    </div>
                  </div>
                )}
              />
            </Stack>
          </LocalizationProvider>
        )}
        rules={{
          required: field.required,
        }}
      />
    </>
  )
}

export default InputDatePicker
