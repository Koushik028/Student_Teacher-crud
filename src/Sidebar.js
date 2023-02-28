import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <ul
      class="navbar-nav bg-dark py-1 sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <a
        class="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div class="sidebar-brand-text mx-3">
          Teacher Student
          <p class="lead fw-normal text-white-100 mb-0">Crud</p>
        </div>
      </a>

      <hr class="sidebar-divider my-0" />

   
      
      
       
   

      <li class="nav-item">
        <Link
          to={"/portal/users"}
          class="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <span>Teacher</span>
        </Link>
      </li>

      {/* <li class="nav-item">
        <a
          class="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseUtilities"
          aria-expanded="true"
          aria-controls="collapseUtilities"
        >
          <span>Student</span>
        </a>
      </li> */}
         <li class="nav-item">
        <Link
          to={"/portal/dashboard"}
          class="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <span>Student</span>
        </Link>
      </li>
    </ul>
  );
}

export default Sidebar;
