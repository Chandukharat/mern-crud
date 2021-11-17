import react from "react";
import axios from 'axios'
import { useState, useEffect } from 'react'
import Post from "./Post";

function View() {

    var Link = require('react-router-dom').Link
    const [name, setname] = useState([])
  
    useEffect(() => {
        axios.get('http://localhost:8000/user').then(x => setname(x.data))
    }, [name])

    function getcall() { axios.get('http://localhost:8000/user').then(x => setname(x.data)) }


 

  

    function delet(id) {

        axios.delete(`http://localhost:8000/user/${id}`)

        getcall()
    }
    return (<div>

    <Post/>
       
        <table class="table">
            <thead>
                <tr>

                    <th scope="col">Firstname</th>
                    <th scope="col">Lastname</th>
                    <th scope="col">age</th>
                    <th scope="col">Education</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {name.map((item) => {
                    return <tr>
                        <td>{item.firstname}</td>
                        <td>{item.lastname}</td>
                        <td>{item.age}</td>
                        <td>{item.education}</td>
                        <td><Link id='link' to={`/update/${item._id}`}>EDIT</Link></td>
                       
                        <td> <button type="button" onClick={() => delet(item._id)} class="btn btn-danger">DELETE</button></td>
                    </tr>
                })}

            </tbody>
        </table>

    </div>)
}

export default View;