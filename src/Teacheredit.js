import axios from "axios";
import { Formik, useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Teacheredit() {
    const params = useParams();
    console.log(params);
  
    const formik = useFormik({
      initialValues: {
        name: "",
        email: "",
        phone: "",
        gender: "",
      },
  
      validate: (values) => {
        let error = {};
  
        if (!values.name) {
          error.name = "Please Enter a valid name";
        }
  
        if (values.name && (values.name.length <= 2 || values.name.length > 15)) {
          error.name = "username must be between 3 to 15 characters";
        }
  
        if (!values.email) {
          error.email = "Please Enter a email";
        }
  
        if (
          values.email &&
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
          error.name = "Please enter a valid email";
        }
  
        return error;
      },
  
      onSubmit: async (values) => {
        try {
          const user = await axios.put(
            `https://6294a49e63b5d108c190315c.mockapi.io/users/${params.id}`,
            values
          );
  
          alert("Success");
        } catch (error) {
          alert("Error");
        }
      },
    });
  
    useEffect(() => {
      let fetchData = async () => {
        try {
          const user = await axios.get(
            `https://6294a49e63b5d108c190315c.mockapi.io/users/${params.id}`
          );
          formik.setValues(user.data);
        } catch (error) {
          alert("Error");
        }
      };
      fetchData();
    }, []);
  return (
    <div class="container">
    <div className="row">
      <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
        <h2 className="text-center m-4">Edit User</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-lg-12">
              <div className="form-group">
                <label>Username</label>
                <input
                  placeholder="Enter your name"
                  name="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  type={"text"}
                  className={`form-control ${
                    formik.touched.name && formik.errors.name
                      ? "error-box"
                      : ""
                  } ${
                    formik.touched.name && !formik.errors.name
                      ? "success-box"
                      : ""
                  }`}
                />
                {formik.touched.name && formik.errors.name ? (
                  <span style={{ color: "red" }}>{formik.errors.name}</span>
                ) : null}
              </div>
            </div>
            <div className="col-lg-12">
              <div className="form-group">
                <label>Email</label>
                <input
                  placeholder="Enter your e-mail address"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  type={"text"}
                  className={`form-control ${
                    formik.touched.email && formik.errors.email
                      ? "error-box"
                      : ""
                  } ${
                    formik.touched.email && !formik.errors.email
                      ? "success-box"
                      : ""
                  }`}
                />
                {formik.touched.email && formik.errors.email ? (
                  <span style={{ color: "red" }}>{formik.errors.email}</span>
                ) : null}
              </div>
            </div>
            <div className="col-lg-12">
              <div className="form-group">
                <label>Phone</label>
                <input
                  placeholder="Enter your Phone number"
                  name="phone"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                  type={"number"}
                  className={`form-control ${
                    formik.touched.phone && formik.errors.phone
                      ? "error-box"
                      : ""
                  } ${
                    formik.touched.phone && !formik.errors.phone
                      ? "success-box"
                      : ""
                  }`}
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <span style={{ color: "red" }}>{formik.errors.phone}</span>
                ) : null}
              </div>

            
              </div>
              <div className="col-lg-12">
              <div className="form-group">
                <label>Gender</label>
                <input
                  placeholder="Enter your gender"
                  name="gender"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.gender}
                  type={"text"}
                  className={`form-control ${
                    formik.touched.gender && formik.errors.gender
                      ? "error-box"
                      : ""
                  } ${
                    formik.touched.gender && !formik.errors.gender
                      ? "success-box"
                      : ""
                  }`}
                />
                {formik.touched.gender && formik.errors.gender ? (
                  <span style={{ color: "red" }}>{formik.errors.gender}</span>
                ) : null}
               </div>
             
                 </div>
                 <div className="col-lg-12">
                <div className="form-group">
                  <label>Subject</label>
                  <input
                    placeholder="Enter your gender"
                    name="subject"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.subject}
                    type={"text"}
                    className={`form-control ${
                      formik.touched.subject && formik.errors.subject
                        ? "error-box"
                        : ""
                    } ${
                      formik.touched.subject && !formik.errors.subject
                        ? "success-box"
                        : ""
                    }`}
                  />
                  {formik.touched.subject && formik.errors.subject? (
                    <span style={{ color: "red" }}>{formik.errors.subject}</span>
                  ) : null}
                 
                 </div>
            </div>
          </div>

          <button type="submit" className="btn btn-outline-primary">
            Submit
          </button>
          <Link
            className="btn btn-outline-danger mx-2"
            to="/portal/users"
          >
            Cancel
          </Link>
        </form>
      </div>
    </div>
  </div>

  )
}

export default Teacheredit