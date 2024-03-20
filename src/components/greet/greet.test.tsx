import { render, screen } from '@testing-library/react'
import { Greet } from './greet'

/**
 * Greet should render the text hello and if a name is passed into the component
 * It should render followed by the name
 */
describe('Greet test suite 1', () => {
  test('renders correctly', () => {
    render(<Greet />)
    const textElement = screen.getByText('Hello')
    expect(textElement).toBeInTheDocument()
  })
  // describe("Nested", () => {
  //   test("renders with a name", () => {
  //     render(<Greet name="Lio" />);
  //     const textElement = screen.getByText("Hello Lio");
  //     expect(textElement).toBeInTheDocument();
  //   });
  // });
})
