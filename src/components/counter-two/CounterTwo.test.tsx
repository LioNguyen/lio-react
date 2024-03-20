import { render, screen } from '@testing-library/react'
import { CounterTwo } from './CounterTwo'
import user from '@testing-library/user-event'

describe('CounterTwo test suite', () => {
  test('render correctly', () => {
    render(<CounterTwo count={0} />)

    const headingElement = screen.getByRole('heading', {
      name: 'Counter Two',
    })
    expect(headingElement).toBeInTheDocument()
  })

  test('handlers are called', async () => {
    const handleDecrementMock = jest.fn()
    const handleIncrementMock = jest.fn()

    render(
      <CounterTwo
        count={0}
        handleDecrement={handleDecrementMock}
        handleIncrement={handleIncrementMock}
      />,
    )
    const decrementButton = screen.getByRole('button', { name: 'Decrement' })
    const incrementButton = screen.getByRole('button', { name: 'Increment' })

    await user.click(decrementButton)
    expect(handleDecrementMock).toHaveBeenCalledTimes(1)

    await user.click(incrementButton)
    expect(handleIncrementMock).toHaveBeenCalledTimes(1)
  })
})
