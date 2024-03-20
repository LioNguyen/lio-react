import { GreetProps } from './greet.types'

export const Greet = ({ name }: GreetProps) => {
  return <div>Hello {name || ''}</div>
}
