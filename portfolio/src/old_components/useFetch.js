import { useState, useEffect } from "react"

export const useFetch = (url) => {
  const [fetchState, updateFetchState] = useState({data: null, loading: true});


  useEffect(() => {

    updateFetchState(fetchState => ({ data: fetchState.data, loading: true }));
    // not sure why yet, but the above is valid and the below raises a linting error in console
    // maybe it's because it allows us to have access to the current state safely? (correct)
    // updateFetchState({ data: fetchState.data, loading: true });

    // could use async/await if used another function within the anonymous
    fetch(url)
      .then(res => res.text())
      .then(res_text => {
        updateFetchState({ data: res_text, loading: false })
      })
  }, [url, updateFetchState]);

  return fetchState;
}