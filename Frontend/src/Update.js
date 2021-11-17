import react from "react"
import axios from 'axios'

import { useState , useEffect } from 'react'
import { useParams, useNavigate} from "react-router-dom";

function Update(){

    const navigate = useNavigate()

    const {id} = useParams()      
   

    var Link = require('react-router-dom').Link
    const [name, setname] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:8000/user/${id}`).then(x=> setname(x.data)) },[])

        function handle(event) {
            setname({ ...name, [event.target.name]: event.target.value })
            
        }

        const info = () => {
            axios.put(`http://localhost:8000/user/${id}`, name).then(x => console.log(x.data))

            navigate('/')

            
        }
    
    return (
        <div>
            <div id="box"><div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">@</span>
                </div>
                <input type="text" class="form-control" placeholder="Firstname" value={name.firstname} onChange={handle} name="firstname" ></input>
            </div>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">@</span>
                    </div>
                    <input type="text" class="form-control" placeholder="Lastname" value={name.lastname} onChange={handle} name="lastname" />
                </div>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">@</span>
                    </div>
                    <input type="number" class="form-control" placeholder="Age" value={name.age} onChange={handle} name="age" />
                </div>
                </div>
                <select name="education" id="dop" value={name.education} onChange={handle}>
                    <option  >Select</option>
                    <option value="science" >SCIENCE</option>
                    <option value='commerce'  >COMMERCE</option>
                    <option value='arts' >ARTS</option>
                </select>
                <button type="button" onClick={info} class="btn btn-success">UPDATE</button>
                
            
        </div>
    )
}

export default Update;