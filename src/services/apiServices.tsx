import axios from "axios";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json; charset=utf-8",
};

const articleRequest = async (articleName: string) => {
  const baseUrl = 'http://localhost:3100/api/v1/articles'
  return axios.get(baseUrl, { params: { name: articleName }, headers })
}

export { articleRequest };
