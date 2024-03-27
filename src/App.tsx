import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom'
import { Home } from '@/components/pages/home'
import { About } from '@/components/pages/about'

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <h1>Router</h1>
          {/* <Link to="/">Home</Link> */}
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
