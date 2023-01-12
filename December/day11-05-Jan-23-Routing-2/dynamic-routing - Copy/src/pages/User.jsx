import {  useEffect, useState } from "react";
import { Link,useParams,useSearchParams} from "react-router-dom";

export default function User() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const {id}=useParams()
  const[searchParam,setSearchParam]=useSearchParams()
  const getSearchPage=(val=1)=>{
    let pageNumber=Number(val)
    if(typeof pageNumber!=="number"){
      pageNumber=1;
    }
    if(pageNumber===0){
      pageNumber=1;
    }
    return pageNumber;
  }
  // console.log(searchParam.get("page"))
  let initialPage=getSearchPage( searchParam.get("page") )
  const[page,setPage]=useState(initialPage)
  console.log(id)

  const getData = (page) => {
    return fetch(`https://reqres.in/api/users?page=${page}`).then((res) =>
      res.json()
    );
  };
  const fetchData = (page) => {
    getData(page)
      .then((data) => setData(data))
      .catch((err) => setError(true))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);


  useEffect(() => {
    setSearchParam({page:page});
  }, [page]);


  const handlePageChange=(val)=>{
    const pageVal=page+val
    setPage(pageVal)
  }
  return loading ? (
    <h1>....Loading</h1>
  ) : error ? (
    <h1>opps... an error occured</h1>
  ) : (
    <div>
      <h1>User's</h1>
      {data?.data?.map((el) => (
        <div key={el.id}>
          <img src={el.avatar} alt={el.first_name} />
          <p>
            Name: {el.first_name}
            {el.last_name}
          </p>
          <Link to={`/users/${el.id}`}> Know More </Link>
        </div>
      ))}
      <button disabled={page===1} onClick={()=>handlePageChange(-1)}>PREV</button>
      <button>{page}</button>
      <button onClick={()=>handlePageChange(+1)}>NEXT</button>
    </div>
  );
}

