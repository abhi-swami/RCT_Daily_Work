import { useEffect, useRef, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function SuccessPage() {
  const [count, setCount] = useState(5);
  const id = useRef(null);
  const navigate = useNavigate();
  console.log(id);
  useEffect(() => {
    id.current = setInterval(() => {
      setCount((preVal) => {
        if (preVal === 1) {
          clearInterval(id.current);
        }
        return preVal - 1;
      });
    }, 1000);
    const cleanUp = () => {
      clearInterval(id.current);
    };
    return cleanUp;
  }, []);
  if (count === 0) {
    navigate("/");
    //     return<Navigate to="/"/>
  }
  return (
    <div>
      <h4> Your Payment is Successfull ! </h4>
      <h3>Your will be redirected in {count} sec</h3>
    </div>
  );
}
