import Card from '../components/Card';

const ShowCreators = ({ creators = [] }) => {
  return (
    <div className="creators-section">
      {creators.length === 0 ? (
        <p className="empty-message">No creators yet.</p>
      ) : (
        <>
          <h2 className="creators-heading">All Content Creators</h2>
          <div className="creators-grid">
            {creators.map((creator) => (
              <Card
                key={creator.id}
                id={creator.id}
                name={creator.name}
                url={creator.url}
                description={creator.description}
                imageURL={creator.imageURL}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ShowCreators;
