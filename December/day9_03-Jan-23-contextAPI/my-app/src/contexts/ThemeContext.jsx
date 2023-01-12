const { createContext, useState } = require("react");


export const ThemeContext=createContext();


const ThemeContextProvider=({children})=>{
    const [theme,setTheme]=useState("dark");

    const toggleTheme=(username)=>{
        setTheme(theme==="dark"?"light":"dark");
    }

    const value={theme,toggleTheme}

    return(
        < ThemeContext.Provider value={value}>
        {children}
        </ThemeContext.Provider>
    )
}
export default ThemeContextProvider;