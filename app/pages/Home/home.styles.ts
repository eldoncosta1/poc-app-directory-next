"use client";

import { Avatar, Button } from "@lets-code-br/design-system-web";
import Link from "next/link";

import styled from "styled-components";

export const UsersList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;

  list-style: none;
`;

export const UserItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

export const UserData = styled.div`
  display: flex;
  gap: 1.25rem;
  align-items: center;
`;

export const UserAvatar = styled(Avatar)``;

export const UserName = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
`;

export const DetailsButton = styled(Button)`
  height: 2.4rem;
  width: 2.4rem;
`;

export const AddUserButtonWrapper = styled(Link)`
  display: flex;
  justify-content: flex-end;
  margin: 1rem 0 2rem;
`;

export const AddUserButton = styled(Button)``;
