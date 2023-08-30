import { styled } from "styled-components";
import Header from "../components/Header";
import IssueList from '../components/IssueList';

const IssueListPage = () => {
  return (
    <Wrapper>
      <Header />
      <IssueList />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border: 3px solid;
  width: 30rem;
  height: 50rem;
  overflow: auto;
`

export default IssueListPage;