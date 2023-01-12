import { useContext } from "react"
import { AuthContext } from "../context/AuthContex"

export default function Logout() {
    const {isAuth,logout}=useContext(AuthContext)
  return( 
  <div>
    {isAuth &&  <h3>Logout</h3>}
    {!isAuth &&  <h3>You are logged out</h3>}
   
    <button disabled={!isAuth} onClick={()=>logout()}> Click here </button>
  </div>
  )
}
