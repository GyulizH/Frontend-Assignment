import React from 'react'
import { MuiThemeProvider } from '@material-ui/core'
import { createTheme } from '@material-ui/core/styles'
import { Search } from './SearchComponent/Search'

import './App.css'

const theme = createTheme({
  overrides: {
    MuiOutlinedInput: {
      root: {
        '&:hover $notchedOutline': {
          borderColor: '#0000ff',
        },
        '&$focused $notchedOutline': {
          borderColor: 'red',
        },
      },
      notchedOutline: {
        borderColor: '#ff0000',
      },
    },
  },
})

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className='App'>
        <Search />
      </div>
    </MuiThemeProvider>
  )
}

export default App
