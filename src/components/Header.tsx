import { styled } from "styled-components";
import { owner, repo } from "../config/const";

const Header = () => {
  return (
    <HeaderWrapper>
      {owner}/{repo}
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.h1`
  display: flex;
  justify-content: center;
  padding: 1rem;
`

export default Header;