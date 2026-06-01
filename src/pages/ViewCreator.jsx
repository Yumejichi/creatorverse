import Card from '../components/Card';
import { supabase } from '../client';
import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'

const ViewCreator = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [creator, setCreator] = useState(null);
    useEffect(() => {
        const fetchCreator = async () => {
            const { data, error } = await supabase
                .from('creators')
                .select()
                .eq('id', id)
                .single();
            if (error) console.error(error);
            else setCreator(data) 
        };

        fetchCreator();
    }, [id]);

    if (!creator) return <p>Loading...</p>

    const handleDelete = async () => {
        const confirmDelete = window.confirm('Delete this creator? This cannot be undone.');
        if (!confirmDelete) return;

        const { error } = await supabase
            .from('creators')
            .delete()
            .eq('id', id);

        if (error) {
            console.error(error);
            return;
        }

        navigate('/creators');
    };

    return (
        <div className="creator-view">
            <Link to="/creators" className="back-link">← Back to Creators</Link>
  
            <Card

                id={creator.id}
                name={creator.name}
                url={creator.url}
                description={creator.description}
                imageURL={creator.imageURL}
            />
            <Link to={`/creators/${id}/edit`} className="btn">Edit Creator</Link>
            <button type="button" className="btn delete-btn" onClick={handleDelete}>Delete Creator</button>

        </div>
    );
};

export default ViewCreator;
