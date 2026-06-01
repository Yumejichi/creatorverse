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
          <Link to="/creators" className="back-link">← Back to Creators</Link>
          
          <h2>Add a Content Creator</h2>
          <p className="form-subtitle">Share someone worth following in the Creatorverse.</p>
          <form onSubmit={handleSubmit} className="creator-form">
            <label>
              Name
              <input type="text" name="name" placeholder="e.g. MKBHD" required />
            </label>
            <label>
              Channel URL
              <input type="url" name="url" placeholder="https://youtube.com/..." required />
            </label>
            <label>
              Description
              <textarea name="description" placeholder="What kind of content do they make?" required />
            </label>
            <label>
              Image URL <span className="optional">(optional)</span>
              <input type="url" name="imageURL" placeholder="https://..." />
            </label>
            <button type="submit" className="btn">Add Creator</button>
          </form>
        </div>
      )
    }

export default AddCreator;