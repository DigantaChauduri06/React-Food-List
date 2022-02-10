import { useState, useEffect } from "react";

export const useFetch = (url) => {
  // States
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  //UseEffect
  useEffect(() => {
    const controllers = new AbortController();
    const getData = async () => {
      try {
        setIsPending(true);
        const res = await fetch(url, { signal: controllers.signal });
        if (!res.ok) throw new Error(res.statusText);
        const json = await res.json();
        setData(json);
        setIsPending(false);
        setError(null);
      } catch (e) {
        if (e.name === "Abort Error") {
          console.log("The Fetch is Aborted");
          return;
        }
        console.log("Error ", e.message);
        setError(e.message);
      }
    };
    getData();
    return () => {
      controllers.abort();
    };
  }, [url]);
  return {
    data,
    isPending,
    error,
  };
};
