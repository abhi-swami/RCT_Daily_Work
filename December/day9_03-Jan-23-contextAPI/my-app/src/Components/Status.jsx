
import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
export default function Status(){
    const {isAuth,token}=useContext(AuthContext)
    return(
        <div>
            {
                isAuth?`token is ${token}`:`user has not logged in`
            }
        </div>
    )
}