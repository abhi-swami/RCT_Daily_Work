import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function User() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getData = () => {
    return fetch(`https://reqres.in/api/users?page=2`).then((res) =>
      res.json()
    );
  };
//   console.log(data)
  const fetchData = () => {
    getData()
      .then((data) => setData(data))
      .catch((err) => setError(true))
      .finally(() => setLoading(false));
  };
  // console.log(data)
  useEffect(() => {
    fetchData();
  }, []);
  return loading ? (
    <h1>....Loading</h1>
  ) : error ? (
    <h1>opps... an error occured</h1>
  ) : (
    <div>
      <h1>User's</h1>
      {
        data?.data?.map((el)=>(
            <div key={el.id}>
                <img src={el.avatar} alt={el.first_name}/>
                <p>Name: {el.first_name}{el.last_name}</p>
                <Link to={`/users/${el.id}`}> Know More </Link>
            </div>
        ))
      }
   
    </div>
  );
}
// {data?.data?.map((el) => (
//     <div key={el.id}>
//       <img src={el.avatar} alt={el.first_name} />
//       <p>
//         Name: {el.first_name}
//         {el.last_name}
//       </p>
//       <Link to={`/users/${el.id}`}>More Info..</Link>
//     </div>
//   ))}