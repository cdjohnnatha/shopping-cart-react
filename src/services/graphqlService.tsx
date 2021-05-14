
interface graphqlServiceResponseInterface {
  success: boolean,
  data?: unknown,
  error?: string[] | null
  errorMessages?: string[] | null
}

interface graphqlErrorInterface {
  message: string,
  path: Array<string>,
  locations: Array<unknown>
}

async function graphqlService(text: unknown, variables: unknown) {
  // Fetch data from GitHub's GraphQL API:
  const responseService: graphqlServiceResponseInterface = {
    success: true,
    error: null,
    data: {}
  };
  try {
    const serverApi = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';
    const response = await fetch(serverApi, {
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
    console.log('responseService',responseJsonObject)
    const [actionNameResponse] = Object.keys(responseJsonObject.data)
    responseService.data = responseJsonObject.data[actionNameResponse];
    if (responseJsonObject.errors?.length > 0) {
      responseService.data = {};
      responseService.success = false;
      responseService.errorMessages = responseJsonObject.errors.map((error: graphqlErrorInterface) => error.message);
      responseService.error = responseJsonObject.errors;
    }
  } catch (error) {
    console.error(error);
    responseService.data = {};
    responseService.success = false;
    responseService.error = error;
  }
  return responseService;
  // Get the response as JSON
}

export default graphqlService;