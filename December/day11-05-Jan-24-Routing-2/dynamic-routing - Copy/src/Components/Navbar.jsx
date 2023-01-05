import { NavLink } from "react-router-dom";
import Styles from "./Navbar.module.css";
const links = [
  { path: "/", text: "Home" },
  { path: "/users", text: "Users" },
  { path: "/success", text: "Success" },
  { path: "/login", text: "Login" },
  { path: "/logout", text: "Logout" },
];

export default function Navbar() {
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      {/* {
            links.map((el)=>(<NavLink
            className={({isActive})=>{
                return isActive?Styles.active:Styles.default
            }}
            key={el.path}
            to={el.path}
            >{el.text}</NavLink>))
        } */}

      {links.map((el) => (
        <NavLink
          className={({ isActive }) => {
            return isActive ? Styles.active : Styles.default;
          }}
          key={el.path}
          to={el.path}
        >
          {el.text}
        </NavLink>
    
      ))}
    </div>
  );
}
