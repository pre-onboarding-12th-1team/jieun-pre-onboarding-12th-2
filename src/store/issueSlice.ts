import { createSlice } from "@reduxjs/toolkit";
import { IssueState } from "../types/Issue";
import { issueDetail, issueList } from "./thunkFunctions";

const initialState: IssueState = {
  isLoading: false,
  issues: [],
  issue: null,
  error: ''
}

const issueSlice = createSlice({
  name: 'issue',
  initialState, 
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(issueList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(issueList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.issues = action.payload;
      })
      .addCase(issueList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(issueDetail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(issueDetail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.issue = action.payload;
      })
      .addCase(issueDetail.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
    }
})

export default issueSlice.reducer;