import { render, screen } from '@testing-library/react'
import { ScrollAnimations } from './ScrollAnimations'

describe('ScrollAnimations test suite', () => {
  test('renders correctly', () => {
    render(<ScrollAnimations />)
    const headingElement = screen.getByRole("heading")
    expect(headingElement).toBeInTheDocument()
  })
})
