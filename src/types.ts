import { ChangeEventHandler, MouseEventHandler } from 'react'

export interface SearchSuggestion {
  searchterm: string
  nrResults: number
}

export interface SearchResult {
  search: string
  suggestions: SearchSuggestion[]
}

export interface InputProps {
  onInputChange: ChangeEventHandler<HTMLInputElement>
  onInputClear: MouseEventHandler<HTMLButtonElement>
  helperText: string
  placeHolder: string
  inputValue: string
  testId?: string
}
