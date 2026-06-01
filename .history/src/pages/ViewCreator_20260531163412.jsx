import Card from '../components/Card';
import { supabase } from '../client';
import { useState } from 'react';

const ViewCreator = () => {
    const { id } = useParams();
    const [creator, setCreator] = useState(null);
    useEffect(() => {
        const fetchCreator = async () => {
            const { data, error } = await supabase
                .from('creators')
                .select()
                .eq('id', id)
                .single();
            if (error) console.error(error);
            else return data;
        }
    };

    fetchCreator();
 }, [creatorId]);

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

export default ViewCreator;