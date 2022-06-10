import { useState } from 'react'
import { act, renderHook } from '@testing-library/react'
import { useDebounce } from './utils'

describe('useDebounce', () => {
  const defaultValue = 'default value',
    changedValue = 'changed value'

  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.runOnlyPendingTimers()
    jest.useRealTimers()
  })

  it('should debounce calls using useDebounce hook', async () => {
    const { result: stateResult, rerender: rerenderState } = renderHook(() =>
      useState(defaultValue),
    )
    const { result: debounceResult, rerender: rerenderDebounce } = renderHook(() =>
      useDebounce(stateResult.current[0], 1000),
    )

    expect(debounceResult.current).toEqual(defaultValue)

    act(() => {
      const [, setValue] = stateResult.current
      setValue(changedValue)
    })

    rerenderState()
    rerenderDebounce()

    expect(debounceResult.current).toEqual(defaultValue)

    act(() => {
      jest.advanceTimersByTime(1000)
    })

    expect(debounceResult.current).toEqual(changedValue)
  })
})
