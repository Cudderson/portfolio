import { useEffect } from "react"

export const useFetch = (url) => {
  useEffect(() => {
    // could use async/await if used another function within the anonymous
    fetch(url)
      .then(x => x.text())
      .then(y => {
        console.log(y)
      })
  }, [url]);
}

// equivalent to above
// export const useFetch = (url) => {
//   useEffect(() => {
//     const getData = async () => {
//       const res = await fetch(url);
//       const text = await res.text();
//       console.log(text);
//     } 

//     getData();
//   }, [url]);
// }