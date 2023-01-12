import{Routes,Route} from "react-router-dom"
import Home from '../pages/Home'
import Contact from '../pages/Contact';
import About from '../pages/About';
import User from "../pages/User";
import SingleUserPage from "../pages/SingleUserPage";
import NotFound from "../pages/NotFoun";
export default function AllRouts(){
    return (
            <Routes>
            {/* 
            path-->on which path we want to show the componant
            element--->which component you want to  show with this path
            */}
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path="/users" element={<User/>}/>
            <Route path="/users/:id" element={<SingleUserPage/>}/>
            <Route path="*" element={<NotFound/>}/>
            {/* 
            /users/:some-varialbe(in our cast it is id)--->will take me to the route 
            */}
        </Routes>
    )
}