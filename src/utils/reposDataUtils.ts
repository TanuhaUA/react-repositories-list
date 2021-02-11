import { DataFromResponse, RepoReformatted, RepoFromResponse } from '../types';

export const fetchRepos = (searchQuery: string, resultsNumber: number): Promise<{ data: DataFromResponse }> =>
  fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'token ',
    },
    body: JSON.stringify({
      query: `
            query {
              search(query: "${searchQuery}", type: REPOSITORY, first: ${String(resultsNumber)}) {
                edges {
                  node {
                    ... on Repository {
                      name
                      url
                      nameWithOwner
                      forks: forkCount
                      stars: stargazerCount
                    }
                  }
                }
              }
            }
          `,
    }),
  })
    .then((response) => response.json());

export const reformatRepos = (data: DataFromResponse): Array<RepoReformatted> =>
  (data?.search?.edges || [])
    .map((repo: RepoFromResponse, index: number) => ({
      ...(repo?.node || {}),
      key: repo?.node?.nameWithOwner || String(index),
    }));