import react from 'react'
import axios from 'axios'
import { useState } from 'react'
import './style.css'

function Post() {
    const [data, setdata] = useState({
        firstname: "",
        lastname: "",
        age: null,
        education: ""
    })

    const info = () => {
        axios.post('http://localhost:8000/user', data).then(x => console.log(x.data))

    }

    function handle(event) {
        setdata({ ...data, [event.target.name]: event.target.value })
    }

    return (
        <div>
            <div id="box"><div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">@</span>
                </div>
                <input type="text" class="form-control" placeholder="Firstname" onChange={handle} name="firstname" />
            </div>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">@</span>
                    </div>
                    <input type="text" class="form-control" placeholder="Lastname" onChange={handle} name="lastname" />
                </div>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">@</span>
                    </div>
                    <input type="number" class="form-control" placeholder="Age" onChange={handle} name="age" />
                </div>
                </div>
                <select name="education" id="dop" onChange={handle}>
                    <option  >Select</option>
                    <option value="science" >SCIENCE</option>
                    <option value='commerce'  >COMMERCE</option>
                    <option value='arts' >ARTS</option>
                </select>
                <button type="button" onClick={info} class="btn btn-success">SUBMIT</button>
                
            
        </div>
    )
}

export default Post