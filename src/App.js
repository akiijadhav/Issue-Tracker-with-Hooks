import React, {useEffect, useState} from "react";
import axios from "axios";
import StoryTable from "./components/StoryTable";
import EditStoryForm from "./components/EditStoryForm";

const App = () => {
    //setting initial state for stories
    const [stories, setStories] = useState([{}]);

    //fetching data with axios and setting the response.data to stories object which can be passed as props for rendering
    useEffect(() => {
        axios
            .get(`http://www.json-generator.com/api/json/get/coJwhddnNe`)
            .then(res => {
                const stories = res.data;
                setStories(stories);
                console.log(stories);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    //setting initial state for editing story form
    const [editing, setEditing] = useState(false);

    //setting  default state of the editing form box & checking which story is being edited
    const [currentStory, setCurrentStory] = useState({
        id: null,
        title: ''
    });

    //on edit setCurrentStory to the selected one so you can change/edit title
    const editRow = (story) => {
        setEditing(true);
        setCurrentStory({id: story.id, title: story.title})
    };

    const updateStory = (id, updatedStory) => {
        setEditing(false);
        setStories(stories.map(story => (story.id === id ? updatedStory: story)))
    };

    return (
        <div className="App">
            <div className="container">
                <h1>Issue Tracker for Biz Analytics</h1>
                <div className="flex-row">
                    <div className="flex-large">
                        {
                            editing ? (
                                <div>
                                    <h3>Update story</h3>
                                    <EditStoryForm
                                        editing={editing}
                                        setEditing={setEditing}
                                        currentStory={currentStory}
                                        updateStory={updateStory}
                                    />
                                </div>
                            ) : (
                                ''
                            )
                        }
                    </div>
                    <div className="flex-large">
                        <StoryTable stories={stories} editRow={editRow}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default App;