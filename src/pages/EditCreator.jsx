import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { supabase } from '../client'

const EditCreator = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [url, setUrl] = useState('')
  const [description, setDescription] = useState('')
  const [imageURL, setImageURL] = useState('')
  const [loading, setLoading] = useState(true)

  // 1. Fetch creator from database
  useEffect(() => {
    async function fetchCreator() {
      const { data, error } = await supabase
        .from('creators')
        .select()
        .eq('id', id)
        .single()

      if (error) {
        console.error(error)
      } else {
        // 2. Load data into form
        setName(data.name)
        setUrl(data.url)
        setDescription(data.description)
        setImageURL(data.imageURL || '')
      }
      setLoading(false)
    }
    fetchCreator()
  }, [id])

  // 3. Update creator in database
  const handleSubmit = async (e) => {
    e.preventDefault()

    const { error } = await supabase
      .from('creators')
      .update({
        name,
        url,
        description,
        imageURL: imageURL || null,
      })
      .eq('id', id)

    if (error) {
      console.error(error)
    } else {
      navigate(`/creators/${id}`)  // go back to view page
    }
  }

  const handleDelete = async () => {
    const confirmDelete = window.confirm('Delete this creator? This cannot be undone.')
    if (!confirmDelete) return

    const { error } = await supabase
      .from('creators')
      .delete()
      .eq('id', id)

    if (error) {
      console.error(error)
      return
    }

    navigate('/creators')
  }

  if (loading) return <p>Loading...</p>

  return (
    <div className="add-creator">
      <Link to={`/creators/${id}`} className="back-link">← Back to Creator</Link>

      <h2>Edit Content Creator</h2>
      <p className="form-subtitle">Update their info in the Creatorverse.</p>

      <form onSubmit={handleSubmit} className="creator-form">
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        <label>
          Channel URL
          <input
            type="url"
            name="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
        </label>

        <label>
          Description
          <textarea
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>

        <label>
          Image URL <span className="optional">(optional)</span>
          <input
            type="url"
            name="imageURL"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
          />
        </label>

        <button type="submit" className="btn">Save Changes</button>
        <button type="button" className="btn delete-btn" onClick={handleDelete}>Delete Creator</button>
      </form>
    </div>
  )
}

export default EditCreator
