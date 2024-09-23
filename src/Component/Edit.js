import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Edit() {


    const [id , setID]= useState(0);
    const [name , setName]=useState("");
    const [age , setAge] =useState("");
    const [email , setEmail] = useState("");

 const navigate =useNavigate()
    useEffect(()=>{
        setID(localStorage.getItem("id"));
        setName(localStorage.getItem("e_name"));
        setAge(localStorage.getItem("e_age"));
        setEmail(localStorage.getItem("e_email"));
    },[])

    function handleUpdate(e){
        e.preventDefault();
        axios.put(`https://66dabd01f47a05d55be5c858.mockapi.io/curd/${id}`,{
            e_name:name,
            e_age:age,
            e_email:email
        }).then(()=>{
            navigate('/')
        })
       
    }

    return (
        <>
            <div className="row">
                <div className="col-md-4">
                    
                    <div className="bg-primary p-4 text-center">
                        <h1>Update Data</h1>
                    </div>

                    <form onSubmit={handleUpdate}>
                        <div className="form-group">
                            <label htmlFor="">Enter Name</label>
                            <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Enter Age</label>
                            <input type="number" placeholder="age" value={age} onChange={(e)=>setAge(e.target.value)} className="form-control" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Enter Email</label>
                            <input type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control"  />
                        </div>

                        <div className="d-grid">
                            <input type="submit" value="update" className="btn btn-primary" />

                        </div>
                    </form>

                </div>
            </div>


        </>
    )
};

export default Edit;