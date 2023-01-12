import{Routes,Route} from "react-router-dom"
import Home from '../pages/Home'
import Contact from '../pages/Contact';
import About from '../pages/About';
import User from "../pages/User";

export default function AllRouts(){
    return (
            <Routes>
            <Route path='/' element={<Home/>}/>
            {/* 
            path-->on which path we want to show the componant
            element--->which component you want to  show with this path
            */}
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path="/users" element={<User/>}/>
        </Routes>
    )
}