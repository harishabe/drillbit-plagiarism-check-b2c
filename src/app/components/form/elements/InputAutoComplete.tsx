import React, { useState, useEffect } from 'react'
import InputLabel from '@mui/material/InputLabel'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import { Control, FieldValues, useController } from 'react-hook-form'

interface FieldProps {
  label: string
  name?: string
  options: Array<{ name: string }>
  size?: 'small' | 'medium'
  isDisabled?: boolean
  required?: boolean
  message?: string
  validationMsg?: string
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
      <Autocomplete
        style={{ marginTop: '-9px' }}
        options={field.options}
        getOptionLabel={(option) => option.name}
        size={field.size}
        disabled={field.isDisabled}
        value={selectedOption}
        onChange={(_, newValue) => setSelectedOption(newValue)}
        renderInput={(params) => (
          <TextField
            {...params}
            name={field.name}
            id={field.name}
            margin="normal"
            error={!!error}
            helperText={error && field.message}
          />
        )}
      />
    </>
  )
}

export default InputAutoComplete
