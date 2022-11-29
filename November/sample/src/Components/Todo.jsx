import React from "react";
export default function Todo() {
  const [title, setTitle] = React.useState("");
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    getTodos(page);
  }, [page]);
  const addTodos = (title) => {
    const obj = {
      title,
      status: false
    };
    setIsLoading(true);
    return fetch(`https://json-server-mocker-masai.herokuapp.com/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        return getTodos(page);
      })
      .catch((err) => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const getTodos = (page) => {
    setIsLoading(true);
    return fetch(
      `https://json-server-mocker-masai.herokuapp.com/tasks?_page=${page}&_limit=5`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res);
      })
      .catch((err) => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  let deleteTask = async (id) => {
    await fetch(`https://json-server-mocker-masai.herokuapp.com/tasks/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });
    getTodos(page);
  };

  return isLoading ? (
    <div>...loading</div>
  ) : isError ? (
    <div>something went wrong</div>
  ) : (
    <div>
      <div>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="add Something here"
        />
        <button onClick={() => addTodos(title)}>Add</button>
      </div>
      <ul>
        {data.map((items) => (
          <li key={items.id}>
            {`${items.title} ${items.status}`}
            {<button onClick={() => deleteTask(items.id)}>Delete</button>}
          </li>
        ))}
      </ul>
      <h3>Page:{page} </h3>
      <button
        disabled={page === 1 ? true : false}
        onClick={() => setPage(page - 1)}
      >
        Previous
      </button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
}
