import axios from "axios";
import { Formik, useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Teacherview() {
    const params = useParams();
    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
      fetchData();
    }, []);
    let fetchData = async () => {
      try {
        setLoading(true);
        const user = await axios.get(
          `https://6294a49e63b5d108c190315c.mockapi.io/users/${params.id}`
        );
        setUsers(user.data);
        setLoading(false);
      } catch (error) {
        alert("Error");
      }
    };
  
    return (
      <div class="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">User</h2>
            <h1>Id:{users.id}</h1>
            <h3 className="text-center m-4">Username:{users.name}</h3>
            <h3 className="text-center m-4">Email:{users.email}</h3>
            <h3 className="text-center m-4">Subject:{users.subject}</h3>
            <h3 className="text-center m-4">Gender:{users.gender}</h3>
            <h3 className="text-center m-4">Phone:{users.phone}</h3>
  
            <Link className="btn btn-outline-danger mx-2" to="/portal/users">
              Back
            </Link>
          </div>
        </div>
      </div>
    
  
  )
}

export default Teacherview