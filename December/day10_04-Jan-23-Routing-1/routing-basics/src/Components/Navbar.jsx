import { Link,NavLink} from "react-router-dom"
import Styles from "./Navbar.module.css"
const links=[
    {path:"/",text:"Home"},
    {path:"/about",text:"About"},
    {path:"/contact",text:"Contact"},
]


export default function Navbar(){
    const defaultStyle={
        color:"grey",
        TextDecoder:"none"
    }
    const activeStyle={
        color:"green",
        TextDecoder:"none"
    }
return(
    <div style={{display:"flex",justifyContent:"space-evenly"}}>
        {
            // links.map((links)=><Link key={links.path} to={links.path}>{links.text}</Link>)
        }
        {
            // links.map((link)=>(
            //     <NavLink style={({isActive})=>{
            //         return isActive?activeStyle:defaultStyle;
            //         return isActive?style.active:defaultStyle;
            //     }} key={link.path} to={link.path}>{link.text}</NavLink>
            // ))
        }
        {
            links.map((el)=>(<NavLink
            className={({isActive})=>{
                return isActive?Styles.active:Styles.default
            }}
            key={el.path}
            to={el.path}
            >{el.text}</NavLink>))
        }
    </div>
)
}
