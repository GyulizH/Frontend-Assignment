import React from 'react'
import { TextField } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import ClearIcon from '@mui/icons-material/Clear'
import SearchIcon from '@mui/icons-material/Search'
import { InputProps } from '../types'

import './Input.css'

export const Input = ({
  onInputChange,
  helperText,
  placeHolder,
  inputValue,
  onInputClear,
  testId = 'input-field',
}: InputProps) => {
  return (
    <TextField
      className='TextField text-field MuiOutlinedInput-root.Mui-focused'
      variant='outlined'
      label='Search Field'
      helperText={helperText}
      onChange={onInputChange}
      value={inputValue}
      placeholder={placeHolder}
      InputProps={{
        endAdornment: (
          <InputAdornment position='end'>
            {inputValue.length > 0 && (
              <IconButton data-testid='clear-button' onClick={onInputClear}>
                <ClearIcon fontSize='medium' />
              </IconButton>
            )}

            <IconButton data-testid='search-button'>
              <SearchIcon fontSize='medium' />
            </IconButton>
          </InputAdornment>
        ),
      }}
      inputProps={{ 'data-testid': testId }}
    />
  )
}
