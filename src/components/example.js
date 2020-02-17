// import React, {useEffect, useState} from "react";
// import axios from "axios";
//
// const App = () => {
//
//     const [stories, setStories] = useState([{}]);
//     const [optionsData, setOptionsData] = useState('');
//     useEffect(() => {
//         axios
//             .get(`http://www.json-generator.com/api/json/get/coJwhddnNe `)
//             .then(res => {
//                 const stories = res.data;
//                 setStories(stories);
//                 console.log(stories);
//             })
//             .catch(err => {
//                 console.log(err);
//             })
//     }, [optionsData]);
//
//
//
//     const selectedOption = (event) => {
//         setOptionsData(event.target.value);
//     };
//
//     const styles = {
//         backgroundColor: optionsData
//     };
//
//     return (
//         <div className="App">
//             <h1>Issue Tracker for Biz Analytics app</h1>
//             <table>
//                 <thead>
//                 <tr>
//                     <th>Id</th>
//                     <th>Stories Description</th>
//                     <th>Status</th>
//                 </tr>
//                 </thead>
//                 <tbody>
//
//                 {
//                     stories.length > 0 ? (
//                         stories.map((story,index) => <tr style={styles}>
//                             <td key={index}>{story.id}</td>
//                             <td key={story.id}>{story.title}</td>
//                             <td>
//                                 <select defaultValue={story.status} onChange={selectedOption}>
//                                     <option disabled={false} value="none">None</option>
//                                     <option name="red" value='red'>Not started</option>
//                                     <option name="purple" value='purple'>In progress</option>
//                                     <option name="green" value='green'>Done</option>
//                                 </select>
//                             </td>
//                         </tr>)
//                     ) : (
//                         '...some error'
//                     )
//                 }
//                 </tbody>
//             </table>
//         </div>
//     )
// };