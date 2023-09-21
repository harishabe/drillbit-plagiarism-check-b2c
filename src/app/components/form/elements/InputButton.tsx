import React from 'react'
import Button from '@mui/material/Button'
import './element.scss'

interface IButtonProps {
  field: {
    label: string
    type?: string
    isDisabled?: boolean
    href?: string | undefined
  }
  isLoading: boolean
}

const InputButton = ({ field, isLoading }: IButtonProps) => {
  const { type, label, isDisabled, href } = field

  const hrefValue = href || ''
  return (
    <div className="form-element">
      <div className="mt16">
        <Button
          fullWidth
          size="medium"
          variant="contained"
          color="primary"
          type={type}
          disabled={isLoading || isDisabled}
          href={hrefValue}
        >
          {isLoading ? 'Loader' : label}
        </Button>
      </div>
    </div>
  )
}

export default InputButton
