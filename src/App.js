import "./App.css";
import useFetch from "./hooks/useFetch";

function App() {
  const API_LINK = "https://jsonplaceholder.typicode.com/users/1";

  const { data, loading } = useFetch(API_LINK);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1>{data.id}</h1>
          <h1>{data.name}</h1>
        </>
      )}
    </div>
  );
}

export default App;
