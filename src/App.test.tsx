import { render } from '@testing-library/react'
import App from './App'
describe('App test suite', () => {
  test('renders correctly', () => {
    render(<App />)
    // const headingElement = screen.getByRole('heading')
    // expect(headingElement).toBeInTheDocument()
  })
})
