import './App.css'
import { Application } from './components/application/application'
import { Counter } from './components/counter/Counter'
import { MuiMode } from './components/mui/MuiMode'
import { Skills } from './components/skills/Skills'
import { Users } from './components/users/Users'
import { AppProviders } from './providers/AppProviders'

function App() {
  return (
    <AppProviders>
      <div className="App">
        {/* <Application /> */}
        {/* <Skills skills={["HTML", "CSS"]} /> */}
        {/* <Counter /> */}
        {/* <MuiMode /> */}
        <Users />
      </div>
    </AppProviders>
  )
}

export default App
