import { render, screen } from '@testing-library/react'
import { BasicsOfMotion } from './BasicsOfMotion'

describe('BasicsOfMotion test suite', () => {
  test('renders correctly', () => {
    render(<BasicsOfMotion />)
    const element = screen.getByText(/BasicsOfMotion/)
    expect(element).toBeInTheDocument()
  })
})
