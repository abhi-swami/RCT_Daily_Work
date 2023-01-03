
import './App.css';
import ProductForm from './Components/ProductForm'; 
import Products from './Components/Products'; 
import Pagination from './Components/Pagination';
import { useState,useEffect} from 'react';


function App() {
  const [loading,setLoading]=useState(false)
  const [error,setError]=useState(false)
  const[products,setProducts]=useState([]);
  const[page,setPage]=useState(1)
  const[totalPage,setTotalPage]=useState(0)



  const handleFormSubmit=(formState)=>{
    setLoading(true)
    fetch(`http://localhost:3001/products`,{
          method:"POST",
          headers:{
          "Content-Type":"application/json"
          },
      body:JSON.stringify(formState)
    }).then((res)=>res.json()).then(()=>{
      setLoading(false)
      fetchAndupdateData(page)
    }).catch((err)=>{
      setLoading(false)
      setError(true)
      console.log(err)
    })
  }


  const getData=async(url)=>{
    try{
      const res= await fetch(url)
      const data=await res.json();
      return{
        totalCount:+res.headers.get(`X-Total-Count`),
        data,
      }
    }catch(err){
      console.log(err)
    }
  }
  const fetchAndupdateData=async(page)=>{
    try{
      setLoading(true)
      const res=await getData(`http://localhost:3001/products?_page=${page}&_limit=3`)
      const{totalCount,data}=res;
      setTotalPage(totalCount);
      setLoading(false)
      setProducts(data)
    }catch(err){
      setLoading(false);
      setError(true);
      console.log(err)
    }
  }
  console.log(products)




  useEffect(()=>{
    fetchAndupdateData(page)
  },[page])



  const handlePage=(x)=>{
    setPage(page+x)
  }


  
  return loading?(<h1>...Loading</h1>):error?(<h1>ooppss.... an error occured</h1>):(
    <div className="App">
      <ProductForm handleFormSubmit={handleFormSubmit}/>
      <div id="product-display">
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"20px",margin:"25px",}}>{
        products.map((el)=><Products key={el.id} {...el}/>)
        }
        </div>
      </div>
      <Pagination page={page} handlePage={handlePage} totalPage={totalPage} />
    </div>
  );
}

export default App;
