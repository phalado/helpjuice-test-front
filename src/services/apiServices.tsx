import axios from "axios";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json; charset=utf-8",
};

const articleRequest = async (articleName: string) => {
  const baseUrl = process.env.REACT_APP_API_URL + 'api/v1/articles'
  return axios.get(baseUrl, { params: { name: articleName }, headers })
}

const saveSearchInput = async (input: string) => {
  const baseUrl = process.env.REACT_APP_API_URL + 'api/v1/search_inputs'
  return axios.post(baseUrl, { input }, { headers })
}

const updateSearchInput = async (input: string, id: number) => {
  const baseUrl = process.env.REACT_APP_API_URL + 'api/v1/search_inputs/' + id
  return axios.put(baseUrl, { input, headers })
}

const getSearchInputs = async () => {
  const baseUrl = process.env.REACT_APP_API_URL + 'api/v1/search_inputs'
  return axios.get(baseUrl, { headers })
}

export { articleRequest, saveSearchInput, updateSearchInput, getSearchInputs };
