import { render, screen } from '@testing-library/react'
import { AnimationControls } from './AnimationControls'

describe('AnimationControls test suite', () => {
  test('renders correctly', () => {
    render(<AnimationControls />)
    const headingElement = screen.getByRole("heading")
    expect(headingElement).toBeInTheDocument()
  })
})
