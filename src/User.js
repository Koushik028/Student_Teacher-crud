import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function User() {
  const [users, setUsers] = useState([]);
  const [isLoading,setLoading] = useState (false);
  useEffect( () => {
    fetchData()
  
  }, []);

  let fetchData  = async () => {
   try {
    setLoading(true)
    const users = await axios.get("https://6294a49e63b5d108c190315c.mockapi.io/users/")
    console.log(users)
    setUsers(users.data)
    setLoading(false)
   } catch (error) {
    alert("Error")
    
   }

  }

  const deleteUser = async (e) => {
    try {
      setLoading(true);
      const ef = await axios.delete(
        `https://6294a49e63b5d108c190315c.mockapi.io/users/${e}`
      );
      alert("Deleted");
      fetchData();
      setLoading(false);
    } catch (error) {
      alert("Error");
    }
  };

  return (
    <div class="container-fluid">
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">Teachers</h1>
      <Link
        to={"/portal/teacher_create"}
        class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
      >
        <i class="fas fa-download fa-sm text-white-50"></i> Create Teacher
      </Link>
    </div>

   {
    isLoading ? <span>Loading...</span> :  <div class="card shadow mb-4">
    <div class="card-header py-3">
      <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
    </div>
    <div class="card-body">
      <div class="table-responsive">
        <table
          class="table table-bordered"
          id="dataTable"
          width="100%"
          cellspacing="0"
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Subject</th>
              <th>Gender</th>
              <th>Action</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
            <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>subject</th>
              <th>Gender</th>
              <th>Action</th>
            </tr>
          </tfoot>
          <tbody>
            {users.map((user) => {
              return (
                <tr>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.subject}</td>
                  <td>{user.gender}</td>
                  <td>
                    <Link to={`/portal/teachview/${user.id}`}className="btn btn-warning mr-1">View</Link>
                    <Link
                      to={`/portal/teachedit/${user.id}`}
                      className="btn btn-primary mr-1"
                    >
                      Edit 
                    </Link>
                    <button
                      onClick={() => deleteUser(user.id)}
                      className="btn btn-danger m-1"
                    >
                      Delete
                    </button>
                  
                  </td>
                </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
     }




    </div>
  );
}

export default User;
