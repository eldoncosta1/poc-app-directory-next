"use client";

import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div``;

export const Title = styled.h1`
  font-weight: 500;
  margin: 1rem 0 2rem;
  font-family: ${({ theme }) => theme.typography.fontFamily.title};
`;

export const ComeBackWrapper = styled(Link)`
  display: flex;
  gap: 0.4rem;
  align-items: center;

  line-height: 1.2;
  width: fit-content;
`;

export const ComeBackText = styled.span``;
