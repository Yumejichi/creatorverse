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

  const [creators, setCreators] = useState([])
  useEffect(() => {
    async function fetchCreators() {
      const { data, error } = await supabase.from('creators').select()
      if (error) console.error(error)
      else setCreators(data)
    }
    fetchCreators()
  }, [])

  const handleDeleteCreator = async (id) => {
    const confirmDelete = window.confirm('Delete this creator? This cannot be undone.')
    if (!confirmDelete) return

    const { error } = await supabase.from('creators').delete().eq('id', id)
    if (error) {
      console.error(error)
      return
    }

    setCreators((prev) => prev.filter((creator) => creator.id !== id))
  }

  const routes = useRoutes([
    { path: '/creators', element: <ShowCreators creators={creators} onDelete={handleDeleteCreator} /> },
    { path: '/creators/add', element: <AddCreator /> },
    { path: '/creators/:id/edit', element: <EditCreator /> },
    { path: '/creators/:id', element: <ViewCreator /> },
  ])

  return (
    <div className="App">
      <h1>CREATORVERSE</h1>
      <div className="buttons ">
        <Link to="/creators" className="btn">View Creators</Link>
        <Link to="/creators/add" className="btn">Add Creator</Link>
      </div>
      {routes}
    </div>
  )
}

export default App
