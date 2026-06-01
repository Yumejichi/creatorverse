import Card from '../components/Card';
import { supabase } from '../client';
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

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
        };

        fetchCreator();
    }, [id]);

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
};

export default ViewCreator;