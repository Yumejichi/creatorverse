// contain the content creator's information
// (name, url, description, and imageURL (optional)) 
// so it can be displayed on the main page. 
// For example, you might want to create a Card file to organize a content creator's information on a card.

import React from 'react';
const Card = ({ name, url, description, imageURL }) => {
    return (
        <div className="card">
        {imageURL && <img src={imageURL} alt={`${name}'s profile`} className="card-image" />}
        <h2 className="card-name">{name}</h2>
        <p className="card-description">{description}</p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="card-link">Visit Profile</a>
        </div>
    );
}