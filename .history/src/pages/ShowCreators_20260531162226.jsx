import Card from '../components/Card';

const ShowCreators = ({ creators }) => {
  return (
    <div className="creators-container">
      {creators.length === 0 ? (  
        <p>No creators found. Please add some creators to display.</p>
      ) : (}
      {creators.map((creator, index) => (
        <Card
          key={index}
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