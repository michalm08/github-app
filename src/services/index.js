import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: "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",
});

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
