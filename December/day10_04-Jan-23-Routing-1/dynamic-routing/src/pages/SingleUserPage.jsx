import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
export default function SingleUserPage() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { id } = useParams();
  const getData = () => {
    return fetch(`https://reqres.in/api/users/${id}`).then((res) => res.json());
  };

  const fetchData = () => {
    getData()
      .then((data) => setData(data))
      .catch((err) => setError(true))
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    fetchData();
  }, []);

  return loading ? (
    <h1>....Loading</h1>
  ) : error ? (
    <h1>opps.... an error occured</h1>
  ) : (
    <div>
      <h1> User Data</h1>
      <div>
        <img src={data?.data?.avatar} alt={data?.data?.name} />
        <h5>
          Name : {data?.data?.first_name} {data?.data?.last_name}
        </h5>
        <h5>Email : {data?.data?.email}</h5>
      </div>
      <div>
        <h4>
          Support Reqres :{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={data?.support?.url}
          >
            {" "}
            Click here To Donate
          </a>{" "}
        </h4>
        <h4> {data?.support?.text} </h4>
      </div>
    </div>
  );
}
