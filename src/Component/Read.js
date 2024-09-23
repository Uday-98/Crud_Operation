import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Read() {

    const [apiData, setApiData] = useState([]);

    function getData() {
        axios.get("https://66dabd01f47a05d55be5c858.mockapi.io/curd")
            .then((responsee) => {
                setApiData(responsee.data);
            })
    }

    function handleDelete(id){
        axios.delete(`https://66dabd01f47a05d55be5c858.mockapi.io/curd/${id}`)
        .then(()=>{
            getData();
        });
    }

    function setDataToStorage(id , name , age ,email){

        localStorage.setItem("id",id);
        localStorage.setItem("e_name",name)
        localStorage.setItem("e_age",age)
        localStorage.setItem("e_email",email)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>

            <div className="row">
                <div className="col-md-12">
                    <div className="mb-2 mt-2">
                        <Link to={'/create'}>
                            <button className="btn btn-primary">Create new data</button>
                        </Link>
                    </div>
                    <table className="table table-bordered table-striped table-dark table-hover">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Email</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                apiData.map((item) => {
                                    return (
                                        <tr>
                                            <td>{item.id}</td>
                                            <td>{item.e_name}</td>
                                            <td>{item.e_age}</td>
                                            <td>{item.e_email}</td>
                                            <td>
                                               <Link to={'/edit'}>
                                               <button className="btn btn-primary" onClick={()=>setDataToStorage(item.id , item.e_name , item.e_age , item.e_email)}>Edit</button>
                                               </Link>
                                            </td>

                                            <td>
                                                <button className="btn btn-danger" onClick={()=>{if (window.confirm("Are you sure You want to delete ?")){handleDelete(item.id)}}}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
};

export default Read;