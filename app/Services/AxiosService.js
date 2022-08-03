
export const api = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api',
  // you can set timebomb here to kill slow responses
  timeout: 8000,
})