import React, { SyntheticEvent, useEffect, useState } from 'react'
import { useFetch } from 'use-http'
import { List, ListItem } from '@mui/material'
import { SearchResult, SearchSuggestion } from '../types'
import { useDebounce } from '../utils'
import { Input } from '../Input/Input'

import './Search.css'

export const Search = () => {
  const { abort, get, loading, error } = useFetch<SearchResult>(`http://localhost:3000`)

  const [searchTerm, setSearchTerm] = useState('')
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([])

  const debouncedSearchTerm = useDebounce(searchTerm, 1000)

  useEffect(() => {
    // Aborting possible previous unfinished requests
    abort()
    if (debouncedSearchTerm.length > 2) {
      // Fetching new data from server
      // then highlighting the search term in the result
      get(`/search?q=${debouncedSearchTerm}`).then((data) => {
        const suggestions = data.suggestions.map((suggestion) => {
          const newSearchTerm = highLightSearchTerm(suggestion.searchterm)
          const newSuggestion = {
            ...suggestion,
            searchterm: newSearchTerm,
          }
          return newSuggestion
        })
        setSuggestions(suggestions)
      })
    } else {
      // Clearing data
      setSuggestions([])
    }
  }, [abort, debouncedSearchTerm, get])

  const handleInputChange = (e: SyntheticEvent) => {
    const currentVal = (e.target as HTMLInputElement).value
    setSearchTerm(currentVal)
  }
  const highLightSearchTerm = (text: string) => {
    const reg = new RegExp(searchTerm, 'gi')
    const newText = text.replace(
      reg,
      (match) => `<mark style="color:#787878; background-color: white">${match}</mark>`,
    )
    return newText
  }
  const clearSearch = () => {
    setSearchTerm('')
  }
  const helperText = suggestions.length > 0 ? '' : 'This is where you enter the search term'
  return (
    <div>
      <Input
        onInputChange={handleInputChange}
        onInputClear={clearSearch}
        placeHolder='Zoeken'
        helperText={helperText}
        inputValue={searchTerm}
      />

      {error && <div>Error var</div>}
      {loading && <div>Loading</div>}

      {suggestions?.length > 0 && (
        <List>
          {suggestions.map((suggestion) => {
            const numberOfItems = `(${suggestion.nrResults})`
            return (
              <ListItem className='list-element' key={Math.random()}>
                <span dangerouslySetInnerHTML={{ __html: suggestion.searchterm }} />
                <span className='number-span'>{numberOfItems}</span>
              </ListItem>
            )
          })}
        </List>
      )}
    </div>
  )
}
