import { render, screen } from '../../test-utils'
import { MuiMode } from './MuiMode'

describe('MuiMode test suite', () => {
  test('renders text correctly', () => {
    render(<MuiMode />)
    const headingElement = screen.getByRole('heading')
    expect(headingElement).toHaveTextContent('dark mode')
  })
})
