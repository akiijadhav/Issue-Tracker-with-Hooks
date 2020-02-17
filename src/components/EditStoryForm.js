import React, {useState, useEffect} from "react";

const EditStoryForm = (props) => {
    const [story, setStory] = useState(props.currentStory);

    const handleInputChange = event => {
        console.log(event.target.name);
        const { name, value } = event.target;
        // noinspection JSCheckFunctionSignatures
        setStory({...story, [name]: value});
    };

    //on change of currentStory i.e edit selected of row we also want to update data in updateForm.
    //without props dependency below we can't switch from 1 row edit to the other
    useEffect(() => {
            setStory(props.currentStory)
        }, [props]);

    return (
        <form onSubmit={e => e.preventDefault()}>
            <label>Title</label>
            <input type="text" name="title" value={story.title} onChange={handleInputChange} />
            <button onClick={event => {
                event.preventDefault();
                props.updateStory(story.id, story)
            }
            }>Update Story</button>
            <button onClick={() => props.setEditing(false)} className="button muted-button">
                Cancel
            </button>
        </form>
    )
};

export default EditStoryForm;