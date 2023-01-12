
import { useContext, useState } from 'react';
import {AuthContext} from '../contexts/AuthContext';
import Form from './Form';

export default function LoginForm(){
    const {handleLogin}=useContext(AuthContext);
    const [userName,setUserName]=useState(" ");

    const onSubmit=(e)=>{
        e.preventDefault();
        handleLogin(userName)

    }


    return(
        <Form onSubmit={onSubmit}  title="Login">
            <input value={userName} onChange={(e)=>setUserName(e.target.value)}  placeholder="name"/>

        </Form>
    )
}