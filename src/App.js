import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Sidebar";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../src/sb-admin-2.css";
import "../src/fontawesome-free/css/all.min.css";
import Topbar from "./Topbar";
import Dashboard from "./Dashboard";
import Card from "./Card";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "./User";
import Usercreate from "./Usercreate";
import Viewuser from "./Viewuser";
import Edituser from "./Edituser";
import { useContext } from "react";
import { UserContext } from "./Usercontext";
import Login from "./Login";
import PortalLayout from "./PortalLayout";
import Teachercreate from "./Teachercreate";
import Teacheredit from "./Teacheredit";
import Teacherview from "./Teacherview";

function App() {
  const { user } = useContext(UserContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/portal" element={<PortalLayout />}>
          <Route path="users" element={<User />}></Route>
          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="user_create" element={<Usercreate />}></Route>
          <Route path="user/:id" element={<Viewuser />}></Route>
          <Route path="teachview/:id" element={<Teacherview />}></Route>
          <Route path="edit/:id" element ={<Edituser/>}></Route>
          <Route path="teacher_create" element={<Teachercreate />}></Route>
          <Route path="teachedit/:id" element={<Teacheredit />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
