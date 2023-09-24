import React, { useState } from 'react'
import { Controller, Control, FieldValues } from 'react-hook-form'
import { Grid, ToggleButtonGroup, InputLabel } from '@mui/material'
import MuiToggleButton from '@mui/material/ToggleButton'
import './element.scss'

interface InputToggleButtonProps {
  control: Control<FieldValues>
  field: {
    name?: string
    label: string
    option: string[]
  }
}

const InputToggleButton = ({ control, field }: InputToggleButtonProps) => {
  const [selectedValues, setSelectedValues] = useState<string>(field?.option[0])

  const handleChange = (newValues: string | null) => {
    if (!newValues || newValues.length === 0) {
      return
    }
    setSelectedValues(newValues)
  }
  return (
    <>
      <Controller
        name={field.name || ''}
        control={control}
        defaultValue={field?.option[0]}
        render={({ field: { onChange, value } }) => (
          <>
            <Grid container>
                <Grid item md={8}>
                  <InputLabel className="toggle">{field.label}</InputLabel>
                </Grid>
                <Grid item md={4}>
                  <ToggleButtonGroup
                    className="toggle"
                    color="primary"
                    value={selectedValues}
                    exclusive
                    onChange={(_, newValue) => handleChange(newValue)}
                  >
                    {field?.option?.map((item, i) => (
                      <MuiToggleButton key={i} value={item}>
                        {item}
                      </MuiToggleButton>
                    ))}
                  </ToggleButtonGroup>
                </Grid>
            </Grid>
          </>
        )}
      />
    </>
  )
}

export default InputToggleButton
