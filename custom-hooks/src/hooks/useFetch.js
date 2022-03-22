import axios from "axios";
import React, { useState, useEffect } from "react";

const useFetch = (url) => {
  const [fetchedData, setFetchedData] = useState([]);
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    axios.get(url).then((response) => {
      setFetchedData(response.data);
      setIsFetched(true);
    });
  }, []);

  return [isFetched, fetchedData];
};

export default useFetch;
