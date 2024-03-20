import { render, screen } from '@testing-library/react'
import { Users } from './Users'

describe('Users test suite', () => {
  function setup() {
    render(<Users />)
  }

  beforeEach(() => {
    setup()
  })

  test('renders correctly', () => {
    const headingElement = screen.getByRole('heading', { name: 'Users' })
    expect(headingElement).toBeInTheDocument()
  })

  // test("renders a list of user", async () => {
  //   const users = await screen.findAllByRole("listitem");
  //   expect(users).toHaveLength(3);
  // });
})
