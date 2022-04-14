import { useEffect, useState } from "react";


export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`).then((res) =>
      res.json().then((response) => setData(response))
    );
  }, []);

  return (
    <div className="App">
      <h1>Table</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>UserId</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((filterItem) => filterItem.id < 6)
            .map((item, i) => (
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.userId}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}


  

