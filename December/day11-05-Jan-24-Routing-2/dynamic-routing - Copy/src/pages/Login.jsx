import { useContext } from "react"
import { Navigate } from "react-router-dom"

import { AuthContext } from "../context/AuthContex"

export default function Login() {
  // const navigte=useNavigate()
    const {isAuth,login}=useContext(AuthContext)
    if(isAuth){
      return <Navigate to="/"/>
      // return navigte ("/")
    }
  return ( 
  <div>
    {!isAuth && <h3>Please Login First !!</h3>}
    {isAuth && <h3>Dear User You are  logged in </h3>}
    
    <button disabled={isAuth} onClick={()=>login()}> Click here </button>
  </div>
  )
}
