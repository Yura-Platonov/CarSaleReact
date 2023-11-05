import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 15px;
  font-family: "Manrope", sans-serif;
  background-color: var(--white);
`;

export const Header = styled.header`
    font-family: 'Manrope';
    font-weight: 500;
    font-size: 18px;
    line-height: 1.11;
    color: #121417;
    border-bottom: solid 1px #3470FF;
    padding: 20px 128px;
`
export const StyledLink = styled(NavLink)`
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 20px;
  line-height: 1.11;
  color: #121417;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);


  &.active {
    color: #3470FF;
  }
  &:hover{
    color: #0B44CD;
  }
`;