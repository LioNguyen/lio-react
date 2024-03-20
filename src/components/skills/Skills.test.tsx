import { logRoles, render, screen } from '@testing-library/react'
import { Skills } from './Skills'

describe('Skills test suite', () => {
  const skills = ['HTML', 'CSS', 'JavaScript']

  test('renders correctly', () => {
    render(<Skills skills={skills} />)

    const listElement = screen.getByRole('list')
    expect(listElement).toBeInTheDocument()
  })

  test('renders a list of skill', () => {
    render(<Skills skills={skills} />)

    const listItemElements = screen.getAllByRole('listitem')
    expect(listItemElements).toHaveLength(3)
  })

  test('render login button', () => {
    render(<Skills skills={skills} />)
    const loginButton = screen.getByRole('button', {
      name: 'Login',
    })
    expect(loginButton).toBeInTheDocument()
  })

  test('Start learning button is not rendered', () => {
    render(<Skills skills={skills} />)
    const startLearningButton = screen.queryByRole('button', {
      name: 'Start learning',
    })
    expect(startLearningButton).not.toBeInTheDocument()
  })

  test('Start learning button is eventually displayed', async () => {
    const view = render(<Skills skills={skills} />)

    // logRoles(view.container);
    // screen.debug();

    const startLearningButton = await screen.findByRole(
      'button',
      {
        name: 'Start learning',
      },
      {
        timeout: 2000, // by default, timeout is 1000
      },
    )

    // logRoles(view.container);
    // screen.debug();

    expect(startLearningButton).toBeInTheDocument()
  })
})
