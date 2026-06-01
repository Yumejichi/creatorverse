import { Link } from 'react-router-dom'
import { BiPencil } from "react-icons/bi";
import { BiInfoCircle } from "react-icons/bi";

const Card = ({ id, name, url, description, imageURL }) => {
  return (
    <div
      className="card"
      style={imageURL ? { backgroundImage: `url(${imageURL})` } : undefined}
    >
      <div className="card-overlay">
        <div className="card-header">
          <h2 className="card-name">{name}</h2>
          <div className="card-actions">
            <Link to={`/creators/${id}`} className="card-icon-btn" title="View"><BiInfoCircle /></Link>
            <Link to={`/creators/${id}/edit`} className="card-icon-btn" title="Edit"><BiPencil /></Link>
          </div>
        </div>
        <div className="card-footer">
          <p className="card-description">{description}</p>
          <a href={url} target="_blank" rel="noopener noreferrer" className="card-link">
            Visit Channel →
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card
