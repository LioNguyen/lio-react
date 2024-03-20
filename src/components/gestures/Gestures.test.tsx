import { render, screen } from '@testing-library/react'
import { Gestures } from './Gestures'

describe('Gestures test suite', () => {
  test('renders correctly', () => {
    render(<Gestures />)
    const headingElement = screen.getByRole("heading")
    expect(headingElement).toBeInTheDocument()
  })
})
