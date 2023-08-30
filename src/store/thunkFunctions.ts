import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../config/axios';
import { owner, repo } from '../config/const';
import { useParams } from 'react-router-dom';

export const issueList = createAsyncThunk(
  'issues/getIssues', async (pageCount: number, thunkAPI) => {
    console.log(pageCount)
    try{
      const response = await axiosInstance.get(
        `/repos/${owner}/${repo}/issues?per_page=15&state=open&sort=comments&page=(pageCount+1)/15+1`
      )

      const issues = response.data.map((item: any) => ({
        issueNumber: item.number,
        title: item.title,
        loginUser: item.user.login,
        createdAt: new Date(item.created_at).toISOString().split('T')[0],
        comments: item.comments,
      }))

      return issues
    }catch(error: any) {
      return thunkAPI.rejectWithValue(error.response.data || error.message)
    }
  }
)

export const issueDetail = createAsyncThunk(
  'issues/getIssueDetail', async (issueNumber: number, thunkAPI) => {
    try{
      const response = await axiosInstance.get(
        `/repos/${owner}/${repo}/issues/${issueNumber}`
      )
      
      const issue = {
        issueNumber: response.data.number,
        title: response.data.title,
        loginUser: response.data.user.login,
        createdAt: new Date(response.data.created_at).toISOString().split('T')[0],
        comments: response.data.comments,
        avatarUrl: response.data.user.avatar_url,
        body: response.data.body,
      }
      
      return issue
    }catch(error: any) {
      return thunkAPI.rejectWithValue(error.response.data || error.message)
    }
  }
)


