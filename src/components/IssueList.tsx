import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { adImage, adUrl } from "../config/const";
import { useAppDispatch, useAppSelector } from "../hooks/toolkithook";
import { issueList } from "../store/thunkFunctions";
import IssueItem from "./IssueItem";
import useIntersectionObserver from "../hooks/useIntersectionObserver";


const IssueList = () => {
  const issues = useAppSelector((state) => state.issue.issues);
  const isLoading = useAppSelector((state) => state.issue.isLoading);
  const dispatch = useAppDispatch();

  const [pageCount, setPageCount] = useState(15)

  useEffect(() => {
    dispatch(issueList(0));
  }, [])

  const loadMore = () => {
    dispatch(issueList(pageCount))
  }

  const { setTarget } = useIntersectionObserver(loadMore, isLoading);

  return (
    <Wrapper /* ref={setContainer} */>
      {issues?.map((issue, index) => (
        <Content key={index}>
          {index % 5 === 0 && index !== 0 && 
            <StyledLink to={adUrl}>
              <AdImage src={adImage} />
            </StyledLink>
          }
          <StyledLink to={`/issueDetail/${issue.issueNumber}`}>
            <IssueItem key={index} issue={issue} />
          </StyledLink>
        </Content>
      ))}
      {isLoading && <p>데이터 요청중 ...</p>}
      <div ref={setTarget} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  list-style: none;
  padding: 0 1rem;
`
const Content = styled.div`
  padding: 0rem 1rem;
  border-bottom: 1px solid;
`
const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
  }
`;
const AdImage = styled.img`
  width:70%;
  height:70%;
  display: block;
  margin: auto;
`

export default IssueList;