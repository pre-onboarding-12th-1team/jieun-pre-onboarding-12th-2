import { styled } from "styled-components";
import { useAppDispatch, useAppSelector } from "../hooks/toolkithook";
import { issueDetail } from "../store/thunkFunctions";
import { useEffect } from "react";

const IssueDetail = ({ issue }: any) => {
  return (
    <DetailWrapper>
      {issue?.body}  
    </DetailWrapper>
  );
};

const DetailWrapper = styled.div`
  padding: 0 1rem;
`

export default IssueDetail;