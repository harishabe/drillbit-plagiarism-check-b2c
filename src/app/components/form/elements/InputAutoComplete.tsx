import React, { useState, useEffect } from 'react'
import { InputLabel, TextField, Autocomplete } from '@mui/material'
import { Control, FieldValues, useController } from 'react-hook-form'
import './element.scss'

interface InputAutoCompleteProps {
  control: Control<FieldValues>
  field: {
    label: string
    name?: string
    options: Array<{ name: string }>
    size?: 'small' | 'medium'
    isDisabled?: boolean
    required?: boolean
    message?: string
    validationMsg?: string
  }
}

const InputAutoComplete = ({ field, control }: InputAutoCompleteProps) => {
  const [selectedOption, setSelectedOption] = useState<{ name: string } | null>(
    null
  )

  const {
    field: { onChange },
    fieldState: { error },
  } = useController({
    name: field.name || '',
    control,
    rules: {
      required: field.required,
    },
    defaultValue: '',
  })

  useEffect(() => {
    if (selectedOption) {
      onChange(selectedOption.name)
    } else {
      onChange('')
    }
  }, [selectedOption, onChange])

  return (
    <>
      <InputLabel>{field.label}</InputLabel>
      <div className="form-element">
        <div className="autocomplete">
          <Autocomplete
            options={field.options}
            getOptionLabel={(option) => option.name}
            disabled={field.isDisabled}
            value={selectedOption}
            onChange={(_, newValue) => setSelectedOption(newValue)}
            renderInput={(params) => (
              <TextField
                {...params}
                name={field.name}
                id={field.name}
                margin="normal"
                fullWidth
                size="small"
                error={!!error}
                helperText={error && field.message}
              />
            )}
          />
        </div>
      </div>
    </>
  )
}

export default InputAutoComplete
