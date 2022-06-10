import React, { SyntheticEvent } from 'react'
import { cleanup, fireEvent, render, waitFor } from '@testing-library/react'
import { InputProps } from '../types'
import { Input } from './Input'

describe('Input component', () => {
  const mockedProps: InputProps = {
    onInputChange: jest.fn(),
    onInputClear: jest.fn(),
    helperText: 'Test Input Field',
    placeHolder: 'Write here',
    inputValue: '',
    testId: 'input',
  }

  afterEach(() => {
    cleanup()
  })

  it('should render the Input Component', () => {
    const { getByTestId } = render(<Input {...mockedProps} />)

    const input = getByTestId(mockedProps.testId!)
    expect(input).toBeInTheDocument()
  })

  it('should call onInputChange when onChange event is fired', async () => {
    const { getByTestId } = render(<Input {...mockedProps} />)

    const input = getByTestId(mockedProps.testId!) as HTMLInputElement
    fireEvent.change(input, { target: { value: 'foo' } })

    await waitFor(() => {
      expect(mockedProps.onInputChange).toHaveBeenCalled()
    })
  })

  it('should clear the input field when the close icon is clicked', async () => {
    let inputValue = ''

    const onInputChange = jest.fn().mockImplementation((event: SyntheticEvent) => {
      inputValue = (event.target as HTMLInputElement).value
    })

    const onInputClear = jest.fn().mockImplementation(() => {
      inputValue = ''
    })

    const getComponent = () => (
      <Input
        {...mockedProps}
        inputValue={inputValue}
        onInputChange={onInputChange}
        onInputClear={onInputClear}
      />
    )

    const { getByTestId, rerender } = render(getComponent())

    const input = getByTestId(mockedProps.testId!) as HTMLInputElement
    fireEvent.change(input, { target: { value: 'foo' } })

    await waitFor(() => {
      expect(inputValue).toEqual('foo')
    })

    rerender(getComponent())

    const clearButton = getByTestId('clear-button')
    fireEvent.click(clearButton)

    await waitFor(() => {
      expect(inputValue).toEqual('')
    })
  })
})
