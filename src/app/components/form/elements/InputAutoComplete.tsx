import React from 'react'
import InputLabel from '@mui/material/InputLabel'
import { Control, FieldValues, useController } from 'react-hook-form'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

interface FieldProps {
  label: string
  name: string
  options: Array<{ name: string }>
  size?: 'small' | 'medium'
  isDisabled?: boolean
  required?: boolean
}

interface InputAutoCompleteProps {
  field: FieldProps
  control: Control<FieldValues>
  options?: Array<{ name: string }>
  renderOption: (option: { name: string }) => React.ReactNode
}

const InputAutoComplete: React.FC<InputAutoCompleteProps> = ({
  field,
  control,
}) => {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({
    name: field.name || '',
    control,
    rules: {
      required: field.required,
    },
  })

  return (
    <>
      <InputLabel>{field.label}</InputLabel>
      <Autocomplete
        options={field.options}
        getOptionLabel={(option) => option.name}
        renderOption={(props, option, state) => (
          <li {...props}>{option.name}</li>
        )}
        size={field.size}
        disabled={field.isDisabled}
        renderInput={(params) => (
          <TextField
            {...params}
            name={field.name}
            id={field.name}
            margin="normal"
            error={!!error}
            helperText={error && error.message}
            onChange={(e) => {
              onChange(e.target.value)
            }}
            value={value?.name || ''}
          />
        )}
      />
    </>
  )
}

export default InputAutoComplete
