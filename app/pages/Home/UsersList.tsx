"use client";

import { queryClient } from "@/services";
import { getUsers } from "@/services/users";
import { QueryClientProvider, useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { FiEdit3 } from "react-icons/fi";
import * as S from "./home.styles";

const UsersListWithProvider: React.FC = () => {
  const { data: users, isSuccess } = useQuery(["getUsers"], {
    queryFn: getUsers,
  });

  if (!isSuccess) return <></>;

  return (
    <S.UsersList>
      {users.map((user) => (
        <S.UserItem key={user.id}>
          <S.UserData>
            <S.UserAvatar
              size={54}
              imageSrc={user.picture}
              name={`${user.firstName} ${user.lastName}`}
            />
            <S.UserName>{`${user.firstName} ${user.lastName}`}</S.UserName>
          </S.UserData>

          <Link href={`user/edit/${user.id}`}>
            <S.DetailsButton iconBefore={<FiEdit3 />} />
          </Link>
        </S.UserItem>
      ))}
    </S.UsersList>
  );
};

export const UsersList: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <UsersListWithProvider />
    </QueryClientProvider>
  );
};
