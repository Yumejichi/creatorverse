import { supabase } from '../client';
import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'

const ViewCreator = ({ onCreatorDeleted }) => {
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

        onCreatorDeleted?.(creator.id);
        navigate('/creators');
    };

    return (
        <div className="creator-view">
            <Link to="/creators" className="back-link">← Back to Creators</Link>

            <section className="creator-detail">
                {creator.imageURL ? (
                    <img
                        src={creator.imageURL}
                        alt={`${creator.name} preview`}
                        className="creator-detail-image"
                    />
                ) : null}

                <h2 className="creator-detail-name">{creator.name}</h2>

                <p className="creator-detail-description">{creator.description}</p>

                <a
                    href={creator.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="creator-detail-link"
                >
                    Visit Channel
                </a>
            </section>

            <div className="creator-view-actions">
                <Link to={`/creators/${id}/edit`} className="btn">Edit Creator</Link>
                <button type="button" className="btn delete-btn" onClick={handleDelete}>Delete Creator</button>
            </div>

        </div>
    );
};

export default ViewCreator;
