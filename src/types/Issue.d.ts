export interface Issue {
  issueNumber: number
  title: string
  loginUser: string
  createdAt: string
  comments: number
  avatarUrl?: string
  body?: string
}

export type IssueState = {
  isLoading: boolean,
  issues: Issue[],
  issue: Issue | null,
  error: string
}
