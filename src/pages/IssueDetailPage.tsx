import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import Header from "../components/Header";
import IssueDetail from "../components/IssueDetail";
import IssueItem from "../components/IssueItem";
import { useAppDispatch, useAppSelector } from "../hooks/toolkithook";
import { useEffect } from "react";
import { issueDetail } from "../store/thunkFunctions";

const IssueDetailPage = () => {
  const issue = useAppSelector((state) => state.issue.issue)
  const dispatch = useAppDispatch()
  const { issueNumber } = useParams();

  useEffect(() => {
    dispatch(issueDetail(Number(issueNumber)))
  }, [])

  return (
    <Wrapper>
      <Header />
      <Content>
        <IssueItem issue={issue} />
      </Content>
      <IssueDetail issue={issue} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border: 3px solid;
  width: 30rem;
  height: 50rem;
  overflow: auto;
  list-style: none;
`
const Content = styled.div`
  padding: 0rem 1rem;
  border-bottom: 1px solid;
`

export default IssueDetailPage;