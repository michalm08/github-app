import { Octokit } from "octokit";
 
const octokit = new Octokit({
  auth: process.env.REACT_APP_API_KEY,
});

export const getUserData = (login) => {
  return octokit.request(`GET /users/${login}`, {

  });
};
export const getUsersData = (q) => {
  return octokit.request("GET /search/users", {
    q: q || "created:>2022-01-01",
    per_page: 5,
  });
};

export const getReposData = (q) => {
  return octokit.request("GET /search/repositories", {
    q: q || "created:>2022-01-01",
    per_page: 5,
  });
};
