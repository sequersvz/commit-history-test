export interface GithubCommit {
  sha: string;
  url: string;
  node_id: string;
  commit: any;
  html_url: string;
  comments_url: string;
  author: GithubCommitInfo;
  committer: GithubCommitInfo;
  parents: GithubCommitParent[];
}

interface GithubCommitInfo {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  url: string;
  type: string;
  site_admin: boolean;
  repos_url: string;
}

interface GithubCommitParent {
  sha: string;
  url: string;
  html_url: string;
}
