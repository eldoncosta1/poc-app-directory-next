import React from "react";
import Link from "next/link";
import { FiLogOut } from "react-icons/fi";

import * as S from "./navbar.styles";
import { Button } from "@lets-code-br/design-system-web";

export const Navbar: React.FC = () => {
  return (
    <S.Header>
      <S.Navbar>
        <S.Brand>
          <Link href="/">PeopleAdmin</Link>
        </S.Brand>

        <S.NavList>
          <S.NavListItem>
            <Link href="/login">
              <FiLogOut />
              Sair
            </Link>
          </S.NavListItem>
        </S.NavList>
      </S.Navbar>
    </S.Header>
  );
};
