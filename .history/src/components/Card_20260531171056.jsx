import { Link } from 'react-router-dom'

const Card = ({ id, name, url, description, imageURL }) => {
  return (
    <div className="card">
      {imageURL && <img src={imageURL} alt={`${name}'s profile`} className="card-image" />}
      <h2 className="card-name">{name}</h2>
      <p className="card-description">{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer" className="card-link">
        Visit Profile
      </a>
      <Link to={`/creators/${id}/edit`} className="btn">Edit</Link>
    </div>
  )
}

export default Card