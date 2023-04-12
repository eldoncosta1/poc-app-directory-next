"use client";

import { color } from "@lets-code-br/design-system-web";
import styled from "styled-components";

export const Header = styled.header`
  background-color: ${color("grey-two")};
`;

export const Navbar = styled.nav`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 70px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Brand = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
`;

export const NavList = styled.ul`
  list-style: none;

  display: flex;
  gap: 2rem;
  align-items: center;
`;

export const NavListItem = styled.li`
  line-height: 1.5rem;

  & a {
    color: ${color("grey-eight")};
    transition: color 0.3s;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
      color: ${color("white")};
      transition: color 0.3s;
    }
  }
`;
