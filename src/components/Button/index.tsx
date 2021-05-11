import Btn from '@material-ui/core/Button'
import React from 'react'

interface Props {
  type?: 'submit' | undefined
  text: string
  size?: 'small' | 'medium' | 'large' | undefined
  className?: string | undefined
  onClick: () => void
}

const Button: React.FC<Props> = ({ type, size, text, className, onClick }) => {
  return (
    <Btn
      fullWidth
      type={type}
      size={size}
      variant="contained"
      className={className}
      onClick={onClick}
    >
      {text}
    </Btn>
  )
}

export default Button
