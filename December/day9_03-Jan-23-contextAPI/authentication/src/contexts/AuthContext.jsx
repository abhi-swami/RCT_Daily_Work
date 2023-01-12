const { createContext, useState } = require("react");


export const AuthContext=createContext();
console.log(AuthContext)

const AuthContextProvider=({children})=>{
    const [isAuth,setIsAuth]=useState(false);
    const[token,setToken]=useState("token")
    


    const handleLogin=(username)=>{
        setIsAuth(true);
        setToken(Date.now()+username)
    }



    const value={isAuth,token,handleLogin}




    return(
        < AuthContext.Provider value={value}>
        {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider;