import { supabase } from "../client";


const AddCreator = () => { 
    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const url = e.target.url.value;
        const description = e.target.description.value;
        const imageURL = e.target.imageURL.value;

        const { data, error } = await supabase
            .from('creators')
            .insert({ name, url, description, imageURL });
        if (error) console.error(error);
        else console.log(data);
    };

    return (
        <div className="add-creator">
            <h2>Add Creator</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" required />
                <input type="url" name="url" placeholder="URL" required />
                <textarea name="description" placeholder="Description" required></textarea>
                <input type="url" name="imageURL" placeholder="Image URL" required />
                <button type="submit">Add Creator</button>
            </form>
        </div>
    );

}

export default AddCreator;