import { PageHeader } from "@/components/PageHeader/PageHeader";
import { PageContainer } from "@/styles/Containers";
import { FiPlus } from "react-icons/fi";
import { UsersList } from "./UsersList";

import * as S from "./home.styles";

export const HomePage: React.FC = () => {
  return (
    <PageContainer>
      <PageHeader title="Usuários" />

      <S.AddUserButtonWrapper href="/user/create">
        <S.AddUserButton iconBefore={<FiPlus />}>Novo Usuário</S.AddUserButton>
      </S.AddUserButtonWrapper>

      <UsersList />
    </PageContainer>
  );
};
