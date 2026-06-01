import Card from '../components/Card';
import { supabase } from '../client';

const ViewCreator = ({ creator }) => {
    const fetchCreator = async (id) => {
    return (
        <div className="creator-view">
            <Card
                name={creator.name}
                url={creator.url}
                description={creator.description}
                imageURL={creator.imageURL}
            />
        </div>
    );
}

export default ViewCreator;