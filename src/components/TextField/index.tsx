import { ThemeProvider } from '@material-ui/core/styles'
import Input from '@material-ui/core/TextField'
import React from 'react'
import useTextFieldTheme from './styles'

interface Props {
  required?: boolean
  select?: boolean
  autoFocus?: boolean
  disabled?: boolean
  variant: 'standard' | 'outlined' | 'filled'
  id: string
  label: string
  name: string
  type: string
  autoComplete?: string
  className?: string | undefined
  value: any
  helperText?: any
  onChange:
    | ((e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => any)
    | undefined
  size?: any
  endAdornment?: any | undefined
  children?: React.ReactNode
}

const TextFiled: React.FC<Props> = ({
  required,
  select,
  autoFocus,
  disabled,
  variant,
  id,
  label,
  name,
  type,
  autoComplete,
  className,
  value,
  helperText,
  onChange,
  size,
  endAdornment,
  children,
}) => {
  return (
    <ThemeProvider theme={useTextFieldTheme}>
      <Input
        required={required}
        disabled={disabled}
        select={select}
        autoFocus={autoFocus}
        fullWidth
        margin="normal"
        id={id}
        label={label}
        name={name}
        type={type}
        variant={variant}
        autoComplete={autoComplete}
        className={className}
        value={value}
        helperText={helperText}
        size={size}
        onChange={onChange}
        InputProps={{ endAdornment: endAdornment }}
      >
        {children}
      </Input>
    </ThemeProvider>
  )
}

export default TextFiled
