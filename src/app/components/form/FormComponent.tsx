'use client'

import React from 'react'
import { Control, FieldValues } from 'react-hook-form'

import InputTextField from './elements/InputTextField'
import InputButton from './elements/InputButton'
import InputAutoComplete from './elements/InputAutoComplete'
import InputFileType from './elements/InputFileType'
import InputNumberField from './elements/InputNumberField'
import InputToggleButton from './elements/InputToggleButton'
import InputDatePicker from './elements/InputDatePicker'
import LabelCaption from './elements/LabelCaption'
import LinkField from './elements/LinkField'

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
  option: string[] | ['']
  dateLabel?: string
  nextDate?: boolean
  prevDate?: boolean
  minDate?: Date | undefined
  maxDate?: Date | undefined
}

interface IFormComponentProps {
  control: Control<FieldValues>
  field: IFormProps
  isLoading?: boolean
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

const FormComponent = ({ control, field, isLoading }: IFormComponentProps) => {
  const { fieldType, id, ...inputProps } = field
  const fieldProps = mapToFieldProps(field)
  switch (fieldType) {
    case 'input':
      return <InputTextField field={field} control={control} />
    case 'button':
      return <InputButton field={inputProps} isLoading={isLoading || false} />
    case 'linkField':
      return <LinkField field={inputProps} />
    case 'file':
      return <InputFileType field={field} control={control} />
    case 'inputNumber':
      return <InputNumberField field={field} control={control} />
    case 'toggle':
      return <InputToggleButton field={field} control={control} />
    case 'datepicker':
      return <InputDatePicker field={field} control={control} />
    case 'labelCaption':
      return <LabelCaption field={field} />
    case 'dropdown':
      return <InputAutoComplete field={fieldProps} control={control} />
    default:
      return null
  }
}

export default FormComponent
