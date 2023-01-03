import { useState } from "react";

const initialState={
    title:"",
    price:"",
    image:"",
}  
export default function ProductForm({handleFormSubmit}){
    const [formState,setFormState]=useState(initialState);
    const {title,price,image}=formState;
    const handleChange=(e)=>{
        const{name,value}=e.target;
        setFormState({...formState,[name]:value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        handleFormSubmit(formState)
        setFormState(initialState);
    }

    return (
        <div style={{border:"1px solid grey"}} id="product-creation-form">
            <form onSubmit={handleSubmit}>
            <h1>Create Products</h1>
            <label>
                Title:
                <input type="text" name='title' value={title} placeholder='Enter Product Title' onChange={handleChange}>
                </input>
            </label>
            <br/>
            <br/>
            <label>
                Price:
                <input type="number" name="price" value={price} placeholder='Enter Product Price' onChange={handleChange}>
                </input>
            </label>
            <br/>
            <br/>
            <label>
                Image URL:
                <input type="text" name='image' value={image} placeholder='Enter Product Image URL' onChange={handleChange}>
                </input>
            </label>
            <br/>
            <br/>
            <input type="submit" value="Create Product"/>
            </form>
            <hr/>
            <br/>
            <br/>
        </div>
    )
}