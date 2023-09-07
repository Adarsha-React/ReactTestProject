import { useEffect, useState } from "react";

const useFetch = (API_LINK) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData(API_LINK);
  }, [API_LINK]);

  const fetchData = async (API_LINK) => {
    const data = await fetch(API_LINK);
    const json = await data.json();
    setData(json);
    setLoading(false);
  };

  return { data, loading };
};

export default useFetch;
