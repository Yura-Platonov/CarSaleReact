import styled from "@emotion/styled";
import bg_home from "images/Bg_home.webp";

export const Wrapper = styled.section`
  height: 530px;
  background-image: url(${bg_home});
  padding: 50px 0;
`;

export const Title = styled.h1`
  display: flex;
  font-weight: 600;
  font-size: 58px;
  justify-content: center;
  align-items: center;
  color: var(--blue-active);
`;


export const Text = styled.p`
  margin-left: 30px;
  margin-top: 200px;
  max-width: 800px;
  font-weight: 500;
  font-size: 24px;
  color: var(--white);
  background: rgba(202, 201, 202, 0.3);

`;
