import Card from '../components/Card';

const ShowCreators = ({ creators = [] }) => {
  return (
    <div className="creators-container">
      {creators.length === 0 ? (  
        <p>No creators Yet.</p>
      ) : (
         <h2>Content Creators</h2>
      )}
      {creators.map((creator, index) => (
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
  );
};

export default ShowCreators;