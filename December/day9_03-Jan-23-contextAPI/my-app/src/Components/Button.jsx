import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
export default function Button(){
    const {theme,toggleTheme}=useContext(ThemeContext);
    const styleObj2={
        background:theme==="dark"?"black":"white",
        color:theme==="dark"?"white":"black",
        borderColor:theme==="dark"?"white":"black",
        borderRadius:"10px",
        padding:"3px"
    }
    return(
        <button style={styleObj2} onClick={toggleTheme}>Change Theme</button>
    )

}