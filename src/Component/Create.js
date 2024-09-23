import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Create() {

    const [name, setname] = useState("");
    const [age, setage] = useState("");
    const [email, setemail] = useState("");
    const navigate = useNavigate()

    const dataSubmit = (e) => {
        e.preventDefault();
        axios.post("https://66dabd01f47a05d55be5c858.mockapi.io/curd", {
            e_name: name,
            e_age: age,
            e_email: email
        }).then(() => {
            navigate('/')
        })
    }


    return (
        <>
            <div className="row">
                <div className="col-md-4">
                    <div className="mb-2 mt-2">
                        <Link to={'/'}>
                            <button className="btn btn-primary">Read Data</button>
                        </Link>
                    </div>
                    <div className="bg-primary p-4 text-center">
                        <h1>Create Data</h1>
                    </div>

                    <form onSubmit={dataSubmit}>
                        <div className="form-group">
                            <label htmlFor="">Enter Name</label>
                            <input type="text" placeholder="Name" className="form-control" onChange={(e) => setname(e.target.value)} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Enter Age</label>
                            <input type="number" placeholder="age" className="form-control" onChange={(e) => setage(e.target.value)} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Enter Email</label>
                            <input type="email" placeholder="email" className="form-control" onChange={(e) => setemail(e.target.value)} />
                        </div>

                        <div className="d-grid">
                            <input type="submit" value="submit" className="btn btn-primary" />

                        </div>
                    </form>

                </div>
            </div>


        </>
    )
};

export default Create;