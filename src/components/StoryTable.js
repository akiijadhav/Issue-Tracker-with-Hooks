import React from 'react'

const StoryTable = props => {
    return (
    <table>
        <thead>
        <tr>
            <th>id</th>
            <th>Description</th>
            <th>Action</th>
            <th>Status</th>
        </tr>
        </thead>
        <tbody>
        {
            props.stories.length > 0 ? (
                props.stories.map((story, index) => (
                    <tr key={index}>
                        <td>{story.id}</td>
                        <td>{story.title}</td>
                        <td>
                            <button className="button muted-button"
                                    onClick={() => {
                                        props.editRow(story);
                                    }}
                            >
                                Edit
                            </button>
                        </td>
                        <td>
                            <select>
                                <option name="red" value="">Not started</option>
                                <option name="blue" value="">In Progress</option>
                                <option name="green" value="">Done</option>
                            </select>
                        </td>
                    </tr>
                ))
            ) : (
                <h1>... some error</h1>
            )
        }
        </tbody>
    </table>
    )
};


export default StoryTable;