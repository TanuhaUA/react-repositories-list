export interface RepoReformatted {
  name: string;
  stars: number;
  forks: number;
  nameWithOwner: string;
  url: string;
  key?: string;
}

export interface RepoFromResponse {
  node: RepoReformatted;
}

export interface DataFromResponse {
  search: {
    edges: Array<RepoFromResponse>
  };
}
