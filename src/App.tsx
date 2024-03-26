import { Button, Container, Heading } from '@chakra-ui/react'
import { useState } from 'react'

import { Users } from './components/organisms/users'
import { Counter } from './components/organisms/counter'

function App() {
  const [showUser, setShowUser] = useState(true)
  return (
    <Container>
      <Heading as="h1">State Management</Heading>
      <Heading as="h2">Zustand</Heading>
      <Counter />
      <Heading as="h2">React Query</Heading>
      <Button onClick={() => setShowUser(!showUser)}>Show User</Button>
      {showUser && <Users />}
    </Container>
  )
}

export default App
