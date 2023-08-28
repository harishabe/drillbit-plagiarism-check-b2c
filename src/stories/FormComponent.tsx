'use client'

import { FormComponent } from '@/app/components'

interface IFields {
  fieldType: string
  id: string
  label: string
  name: string
  type: string
}

const FormsComponent = ({ fields }: { fields: IFields[] }) => {
  return (
    <div>
      {fields
        ? fields.map((field) => <FormComponent key={field.id} field={field} />)
        : null}
    </div>
  )
}

export default FormsComponent
