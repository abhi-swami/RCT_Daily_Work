import {useState} from "react";
const initialState={
    username:"",
    password:"",
    country:"",
    isMarried: false
}
export default function Form(){
    const[formState,setFormState]=useState(initialState);
    const [user,setUser]=useState([]);
    const handleChange=(e)=>{
        const{type,checked,value,name}=e.target;
        const val=type==="checkbox"? checked : value;
        setFormState({...formState,[name]:val})
        console.log(e.target.value)
    }
    const handleSubmit =(e)=>{
        console.log(e)
        e.preventDefault();
        setUser([...user,formState])
        setFormState(initialState);

    }
    const {username,password,country,isMarried}=formState;
    return(
        <div>
        <form onSubmit={handleSubmit}>
            <h1>FORM</h1>
            <label htmlFor="username">
                USERNAME:
                <input type="text" id="username"  name="username" placeholder="User Name" value={username} onChange={handleChange}/>
            </label>
            <br />
            <br />
            <label htmlFor="password">
                PASSWORD:
                <input type="password" id="password"  name="password" placeholder="Password" value={password} onChange={handleChange}/>
            </label>
            <br />
            <br />
            <label htmlFor="country">
                COUNTRY:
                <select id="country" name="country" value={country} onChange={handleChange}>
                    <option value="">Select A Country</option>
                    <option value="india">India</option>
                    <option value="russia">Russia</option>
                    <option value="usa">USA</option>
                    <option value="uk">UK</option>
                </select>
            </label>
            <br />
            <br />
            <label>
                ARE YOU MARREID :
                <input type="checkbox" name="isMarried"  value={isMarried} onChange={handleChange}/>
            </label>
            <br />
            <br />
            <input type="submit"/>
        </form>
        </div>
    )
}