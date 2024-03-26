import { render, screen } from '@testing-library/react'
import App from './App'
describe('App test suite', () => {
  test('renders correctly', () => {
    render(<App />)
    const headingElement = screen.getByRole('heading', {
      name: 'State Management',
    })
    expect(headingElement).toBeInTheDocument()
  })
})
