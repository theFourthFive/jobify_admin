import { useState, useEffect } from "react";
import axios from "axios";

export default function useFetch(url) {
  const [workers, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        // prettier-ignore
        const { data } = await axios.get(url);
        setData(data);
        setIsPending(false);
        setError(null);
      } catch (error) {
        setError(error.message);
        setIsPending(false);
      }
    })();
  }, [url]);

  return { workers, isPending, error };
}
