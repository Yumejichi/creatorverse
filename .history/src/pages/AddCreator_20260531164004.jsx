import { supabase } from "../client";


const AddCreator = () => { 
    const ashandleSubmit = async (e) => {
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

}

export default AddCreator;