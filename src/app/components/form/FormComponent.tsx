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

const FormComponent = ({
  control,
  field,
  isLoading,
  options,
}: IFormComponentProps) => {
  const { fieldType, id, ...inputProps } = field
  switch (fieldType) {
    case 'input':
      return <InputTextField field={field} control={control} />
    case 'button':
      return <InputButton field={inputProps} isLoading={isLoading || false} />
    case 'linkField':
      return <LinkField field={inputProps} />
    case 'dropdown':
      return (
        <InputAutoComplete field={field} control={control} options={options} />
      )
    default:
      return null
  }
}

export default FormComponent
