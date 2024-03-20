import { act, render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import { Counter } from './Counter'

describe('Counter test suite', () => {
  let countElement: HTMLElement
  let incrementButton: HTMLElement

  // Run this before each test
  function setup() {
    user.setup()
    render(<Counter />)
    countElement = screen.getByRole('heading')
    incrementButton = screen.getByRole('button', { name: 'Increment' })
  }

  beforeEach(() => {
    setup()
  })

  // Test component renders
  describe('Test component renders', () => {
    test('renders correctly', () => {
      expect(countElement).toBeInTheDocument()
      expect(incrementButton).toBeInTheDocument()
    })

    test('renders a count of 0', () => {
      expect(countElement).toHaveTextContent('0')
    })
  })

  // Test component reacts to events
  describe('Test component reacts to events', () => {
    test('renders a count of 1 after clicking', async () => {
      async function clickButton() {
        await user.click(incrementButton)
      }

      await act(async () => {
        await clickButton()
      })

      expect(countElement).toHaveTextContent('1')
    })

    test('renders a count of 2 after clicking twice', async () => {
      async function clickButton() {
        await user.click(incrementButton)
      }

      let i = 0
      while (i < 2) {
        await act(async () => {
          await clickButton()
        })
        i++
      }

      expect(countElement).toHaveTextContent('2')
    })

    test('renders a count of 10 after clicking set button', async () => {
      const amountInput = screen.getByRole('spinbutton')
      const setButton = screen.getByRole('button', { name: 'Set' })

      async function typeAmount() {
        await user.type(amountInput, '10')
        await user.click(setButton)
      }

      await act(async () => {
        await typeAmount()
      })

      expect(amountInput).toHaveValue(10)
      expect(countElement).toHaveTextContent('10')
    })

    test('elements are focused in the right order', async () => {
      const amountInput = screen.getByRole('spinbutton')
      const setButton = screen.getByRole('button', { name: 'Set' })

      async function clickTab() {
        await user.tab()
      }

      await act(async () => {
        await clickTab()
      })
      expect(incrementButton).toHaveFocus()

      await act(async () => {
        await clickTab()
      })
      expect(amountInput).toHaveFocus()

      await act(async () => {
        await clickTab()
      })
      expect(setButton).toHaveFocus()
    })
  })
})
