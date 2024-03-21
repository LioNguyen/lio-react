import { render, screen } from '@testing-library/react'
import { Todo } from './Todo'

describe('Todo test suite', () => {
  test('renders correctly', () => {
    render(<Todo />)
    const headingElement = screen.getByRole("heading")
    expect(headingElement).toBeInTheDocument()
  })
})
