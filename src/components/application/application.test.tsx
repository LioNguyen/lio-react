import { render, screen } from '@testing-library/react'
import { Application } from './application'

describe('Application test suite', () => {
  test('renders correctly', () => {
    render(<Application />)

    // Heading
    const pageHeading = screen.getByRole('heading', {
      level: 1,
      name: 'Job application form',
    })
    expect(pageHeading).toBeInTheDocument()

    const sectionHeading = screen.getByRole('heading', {
      level: 2,
      name: 'Section 1',
    })
    expect(sectionHeading).toBeInTheDocument()

    // Text
    const paragraphElement = screen.getByText('All fields are mandatory')
    expect(paragraphElement).toBeInTheDocument()

    // Title
    const closeElement = screen.getByTitle('close')
    expect(closeElement).toBeInTheDocument()

    // Image
    const imageElement = screen.getByAltText('a person with a laptop')
    expect(imageElement).toBeInTheDocument()

    // Custom element
    const customElement = screen.getByTestId('custom-element')
    expect(customElement).toBeInTheDocument()

    // Name Input
    const nameElement1 = screen.getByRole('textbox', { name: 'Name' })
    expect(nameElement1).toBeInTheDocument()

    const nameElement2 = screen.getByLabelText('Name', { selector: 'input' })
    expect(nameElement2).toBeInTheDocument()

    const nameElement3 = screen.getByPlaceholderText('Fullname')
    expect(nameElement3).toBeInTheDocument()

    const nameElement4 = screen.getByDisplayValue('Lio')
    expect(nameElement4).toBeInTheDocument()

    // Bio Input
    const bioElement = screen.getByRole('textbox', { name: 'Bio' })
    expect(bioElement).toBeInTheDocument()

    // Location Options
    const jobLocationElement = screen.getByRole('combobox')
    expect(jobLocationElement).toBeInTheDocument()

    // Terms Input (checkbox type)
    const termsElement1 = screen.getByRole('checkbox')
    expect(termsElement1).toBeInTheDocument()

    const termsElement2 = screen.getByLabelText(
      'I agree to the terms and conditions',
    )
    expect(termsElement2).toBeInTheDocument()

    // Button
    const submitButtonElement = screen.getByRole('button')
    expect(submitButtonElement).toBeInTheDocument()
  })
})
