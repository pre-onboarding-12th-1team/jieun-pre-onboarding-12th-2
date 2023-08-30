import { styled } from "styled-components";
import { Issue } from "../types/Issue";

const IssueItem = ({ issue }: any) => {
  if(issue?.length === 1) {
    issue = issue[0]
  }
  return (
    <ItemWrapper>
      <Flex>
        {issue.avatarUrl && <Image src={issue.avatarUrl} />}
        <Block>
          <Flex>
            <div>#{issue.issueNumber}</div>
            <div>{issue.title}</div>
          </Flex>
          <Flex>
            <span>작성자: {issue.loginUser}</span>
            <span>작성일: {issue.createdAt}</span>
          </Flex>
        </Block>
        <Comment>코멘트: {issue.comments}</Comment>
      </Flex>
    </ItemWrapper>
  );
};

const ItemWrapper = styled.div`
  border-bottom: 1px;
  padding: 0.5rem 0rem;
  color: #000;
`
const Block = styled.div`
  display: block;
`
const Flex = styled.div`
  display: flex;
`
const Image = styled.img`
  width: 5rem;
  height: 5rem;
`
const Comment = styled.div`
  white-space : nowrap;
`

export default IssueItem;