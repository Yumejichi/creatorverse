import { useState, useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import AddCreator from './pages/AddCreator'
import ShowCreators from './pages/ShowCreators'
import ViewCreator from './pages/ViewCreator'
import EditCreator from './pages/EditCreator'
import { supabase } from './client'
import './App.css'

const [creators, setCreators] = useState([])
function App() {
  async function fetchCreators() {
    const { data, error } = await supabase.from('creators').select()
    if (error) console.error(error)
    else setCreators(data)
  }
  fetchCreators()

  return (
    <div className="App">
      <img src={heroImg} alt="Hero" className="hero-image" />
      <h1>Welcome to CreatorHub</h1>
      <p>Discover and share your favorite content creators!</p>
      <div className="buttons">
        <a href="/add" className="btn">Add Creator</a>
        <a href="/creators" className="btn">View Creators</a>
      </div>
    </div>
  )
}

export default App
