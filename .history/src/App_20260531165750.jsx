import { useState, useEffect } from 'react'
import { useRoutes, Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import AddCreator from './pages/AddCreator'
import ShowCreators from './pages/ShowCreators'
import ViewCreator from './pages/ViewCreator'
import EditCreator from './pages/EditCreator'
import { supabase } from './client'
import './App.css'

function App() {

  const routes = useRoutes([
    {path: '/creators', element: <ShowCreators />},
    {path: '/creators/add', element: <AddCreator />},
    {path: '/creators/:id', element: <ViewCreator />},
    {path: '/creators/:id/edit', element: <EditCreator />}
  ])

  const [creators, setCreators] = useState([])
  async function fetchCreators() {
    const { data, error } = await supabase.from('creators').select()
    if (error) console.error(error)
    else setCreators(data)
  }
  fetchCreators()

  return (
    <div className="App">
      <h1>CREATORVERSE</h1>
      <div className="buttons ">
        <Link to="/creators" className="btn">View Creators</Link>
        <Link to="//add" className="btn">Add Creator</Link>
      </div>
      <div>
        <ShowCreators creators={creators} />
      </div>
    </div>
  )
}

export default App
