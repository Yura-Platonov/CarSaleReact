import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Loader } from "components/Loader/Loader";
import { Container, Header, StyledLink } from "./SharedLayout.styled";

export const SharedLayout = () => {
  return (
    <Container>
       <Header>
        <ul style={{display: 'flex', gap: '50px'}}>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="catalog">Catalog</StyledLink>
          </li>
          <li>
            <StyledLink to="favorites">Favorites</StyledLink>
          </li>
        </ul>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
