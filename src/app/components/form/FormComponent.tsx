'use client'

import React from 'react'
import InputTextField from './elements/InputTextField'
import InputButton from './elements/InputButton'
import InputAutoComplete from './elements/InputAutoComplete'
import LinkField from './elements/LinkField'
import { Control, FieldValues } from 'react-hook-form'

interface IFormProps {
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
  isDisabled?: boolean
  href?: string
  options?: Array<{ name: string }>
}

interface IFormComponentProps {
  control: Control<FieldValues>
  field: IFormProps
  isLoading?: boolean
  options?: Array<{ name: string }>
}

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

const mapToFieldProps = (formProps: IFormProps): FieldProps => {
  return {
    label: formProps.label,
    name: formProps.name || '',
    options: formProps.options || [],
    isDisabled: formProps.isDisabled,
    required: formProps.required,
    message: formProps.message,
    validationMsg: formProps.validationMsg,
  }
}

const FormComponent = ({
  control,
  field,
  isLoading,
  options,
}: IFormComponentProps) => {
  const { fieldType, id, ...inputProps } = field
  const fieldProps = mapToFieldProps(field)
  switch (fieldType) {
    case 'input':
      return <InputTextField field={field} control={control} />
    case 'button':
      return <InputButton field={inputProps} isLoading={isLoading || false} />
    case 'linkField':
      return <LinkField field={inputProps} />
    case 'dropdown':
      return (
        <InputAutoComplete
          field={fieldProps}
          control={control}
          options={options}
          renderOption={(option) => <div>{option.name}</div>}
        />
      )
    default:
      return null
  }
}

export default FormComponent
