import axios from "axios";
import { formik, useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";

function Teachercreate() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      country: "",
      state: "",
      city: "",
      phone: "",
      dob: "",
      gender: "",
    },
    validate: (values) => {
      let error = {};
      console.log(values);
      if (!values.name) {
        error.name = "Please enter a email";
      }

      if (values.name && (values.name.length <= 2 || values.name.length > 15)) {
        error.name = "Username must be between 3 to 15 characters";
      }

      if (!values.email) {
        error.email = "Please enter a value";
      }

      if (
        values.email &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        error.email = "please enter a valid email";
      }

      if (values.phone.toString().length !== 10) {
        error.phone = "please enter a valid phonenumber";
      }

      console.log(values.dob.split("_")[0]);
      console.log(new Date().getFullYear());
      let age = new Date().getFullYear() - parseInt(values.dob.split("_")[0]);
      console.log(age);

      if (age < 18) {
        error.dob = "you must be above 18";
      }

      return error;
    },

    onSubmit: async (values) => {
      try {
        const userdata = await axios.post(
          "https://6294a49e63b5d108c190315c.mockapi.io/users/",
          values
        );
        alert("Success");
      } catch (error) {
        alert("Error");
      }
    },
  });
  return (
    <div class="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <label>Usename *</label>
              <input
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                type={"text"}
                className={`form-control ${
                  formik.touched.name && formik.errors.name ? "error-box" : ""
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
          <div className="col-lg-6">
            <div className="form-group">
              <label>Email*</label>
              <input
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                type={"text"}
                className={`form-control ${
                  formik.touched.email && formik.errors.email ? "error-box" : ""
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
          {/* <div className="col-lg-4">
            <div className="form-group">
              <label>Country</label>
              <select
                name="country"
                onChange={formik.handleChange}
                value={formik.values.country}
                className="form-control"
              >
                <option value={""}>---Select---</option>
                <option value={"IN"}>India</option>
                <option value={"US"}>America</option>
                <option value={"CH"}>China</option>
              </select>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>State</label>
              <select
                name="state"
                onChange={formik.handleChange}
                value={formik.values.state}
                className="form-control"
              >
                <option>India</option>
                <option>America</option>
                <option>China</option>
              </select>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>City</label>
              <select
                name="city"
                onChange={formik.handleChange}
                value={formik.values.city}
                className="form-control"
              >
                <option>India</option>
                <option>America</option>
                <option>China</option>
              </select>
            </div>
          </div> */}
          <div className="col-lg-4">
            <div className="form-group">
              <label>Phone</label>
              <input
                name="phone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                type={"number"}
                className={`form-control ${
                  formik.touched.phone && formik.errors.phone ? "error-box" : ""
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
          <div className="col-lg-4">
            <div className="form-group">
              <label>Subject</label>
              <input
                name="subject"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.subject}
                type={"text"}
                className={`form-control ${
                  formik.errors.subject ? "error-box" : ""
                } ${
                  formik.touched.subject && !formik.errors.subject
                    ? "success-box"
                    : ""
                }`}
              />
              {formik.errors.subject ? (
                <span style={{ color: "red" }}>{formik.errors.subject}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>Gender</label>
              <select
                name="gender"
                onChange={formik.handleChange}
                value={formik.values.gender}
                className="form-control"
              >
                <option value={""}>---Select---</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
          </div>
          <div className="col-lg-4">
            {/* <div className="form-group">
            <input type={"submit"} className="btn btn-primary" />
          </div> */}
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/portal/users">
              Cancel
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Teachercreate;
