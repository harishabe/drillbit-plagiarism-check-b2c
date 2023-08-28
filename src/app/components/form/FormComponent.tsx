import React from 'react'
import InputTextField from './elements/InputTextField'
import InputButton from './elements/InputButton'
import LinkField from './elements/LinkField'

interface IFormProps {
  id: string
  fieldType: string
  label: string
  type?: string
  name?: string
  path?: string
  align?: string
}

interface IFormComponentProps {
  field: IFormProps
}

const FormComponent = ({ field }: IFormComponentProps) => {
  const { fieldType, id, ...inputProps } = field
  switch (fieldType) {
    case 'input':
      return <InputTextField field={inputProps} />
    case 'button':
      return <InputButton field={inputProps} />
    case 'linkField':
      return <LinkField field={inputProps} />
    default:
      return null
  }
}

export default FormComponent
