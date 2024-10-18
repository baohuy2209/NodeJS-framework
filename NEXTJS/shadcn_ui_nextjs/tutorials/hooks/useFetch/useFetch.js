import React from "react";
const useFetch = (url, options) => {
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, options);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setResponse(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  return { response, error };
};
export default useFetch;
