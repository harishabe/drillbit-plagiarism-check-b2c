import React from 'react'
import './element.scss'

interface InputLabelCaptionProps {
  field: {
    label: string
  }
}

const LabelCaption = ({ field }: InputLabelCaptionProps) => {
  return (
    <div className="form-element">
      <div className="label-caption">
        <b>{field.label}</b>
      </div>
    </div>
  )
}

export default LabelCaption
