import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import User from "../pages/User";
import SingleUserPage from "../pages/SingleUserPage";
import NotFound from "../pages/NotFoun";
import SuccessPage from "../pages/SuccessPage";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import PrivateRoute from "./PrivatRoute";
export default function AllRouts() {
  return (
    <Routes>
      {/* 
            path-->on which path we want to show the componant
            element--->which component you want to  show with this path
            */}
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<User />} />
      <Route
        path="/users/:id"
        element={
          <PrivateRoute>
            <SingleUserPage />
          </PrivateRoute>
        }
      />
      <Route path="/success" element={<SuccessPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="*" element={<NotFound />} />
      {/* 
            /users/:some-varialbe(in our cast it is id)--->will take me to the route 
            */}
    </Routes>
  );
}
