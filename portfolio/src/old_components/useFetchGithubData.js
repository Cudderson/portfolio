const useFetchGithubData = async () => {
  const [api_response, updateApiResponse] = useState(null);
  const [my_avatar, updateMyAvatar] = useState(null);
  
  // const github_api_url = 'https://api.github.com';
  const github_repo_url = "https://api.github.com/users/cudderson";

  const response = await fetch(github_repo_url);
  const data = await response.json();

  // update state for avatar and api refs
  updateMyAvatar(data.avatar_url);
  updateApiResponse(JSON.stringify(data, null, 4));
}

export default useFetchGithubData;