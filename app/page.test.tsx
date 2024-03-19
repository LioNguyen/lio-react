import { render, screen } from '@testing-library/react'
import Home from './page'

describe('Page test suite', () => {
  test('renders correctly', () => {
    render(<Home />)
    const headingElement = screen.getByRole('heading')
    expect(headingElement).toBeInTheDocument()
  })
})
