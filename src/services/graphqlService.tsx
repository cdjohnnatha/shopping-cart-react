async function graphqlService(text: unknown, variables: unknown) {
  // Fetch data from GitHub's GraphQL API:
  const response = await fetch('http://localhost:3000/api', {
    method: 'POST',
    headers: {
      // Authorization: `bearer ${REACT_APP_GITHUB_AUTH_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  const responseJsonObject = await response.json();

  // Get the response as JSON
  return responseJsonObject;
}

export default graphqlService;