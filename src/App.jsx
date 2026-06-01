import { useState, useEffect } from 'react'
import { useRoutes, Link } from 'react-router-dom'
import AddCreator from './pages/AddCreator'
import ShowCreators from './pages/ShowCreators'
import ViewCreator from './pages/ViewCreator'
import EditCreator from './pages/EditCreator'
import { supabase } from './client'
import './App.css'

function App() {

  const [creators, setCreators] = useState([])

  const handleCreatorAdded = (newCreator) => {
    setCreators((prev) => [...prev, newCreator])
  }

  const handleCreatorDeleted = (deletedId) => {
    setCreators((prev) => prev.filter((creator) => creator.id !== deletedId))
  }

  useEffect(() => {
    async function fetchCreators() {
      const { data, error } = await supabase.from('creators').select()
      if (error) console.error(error)
      else setCreators(data)
    }
    fetchCreators()
  }, [])

  const routes = useRoutes([
    { path: '/', element: <ShowCreators creators={creators} /> },
    { path: '/creators', element: <ShowCreators creators={creators} /> },
    { path: '/creators/add', element: <AddCreator onCreatorAdded={handleCreatorAdded} /> },
    { path: '/creators/:id/edit', element: <EditCreator onCreatorDeleted={handleCreatorDeleted} /> },
    { path: '/creators/:id', element: <ViewCreator onCreatorDeleted={handleCreatorDeleted} /> },
  ])

  return (
    <div className="App">
      <h1>CREATORVERSE</h1>
      <div className="buttons ">
        <Link to="/creators" className="btn">View Creators</Link>
        <Link to="/creators/add" className="btn">Add Creator</Link>
      </div>
      <hr />
      {routes}
    </div>
  )
}

export default App
