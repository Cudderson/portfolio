import { useState, useEffect } from "react";

const App = () => {
  // when done, we'll extract into components
  const [api_response, updateApiResponse] = useState(null);
  const [my_avatar, updateMyAvatar] = useState(null);

  useEffect(() => {
    // when abstracting, maybe call this function from JSX?
    const fetchData = async () => {
      // const github_api_url = 'https://api.github.com';
      const github_repo_url = "https://api.github.com/users/cudderson";
  
      const response = await fetch(github_repo_url);
      const data = await response.json();
  
      // update state for avatar and api refs
      updateMyAvatar(data.avatar_url);
      updateApiResponse(JSON.stringify(data, null, 4));
    }
    fetchData();
  }, [])

  return (
    <div>
      <pre>{api_response}</pre>
      <img src={my_avatar} alt={"my avatar"}></img>
    </div>
  )
}

export default App;