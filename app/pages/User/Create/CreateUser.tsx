import { PageHeader } from "@/components/PageHeader/PageHeader";
import { UserForm } from "@/components/UserForm/UserForm";

import { PageContainer } from "@/styles/Containers";

export const CreateUserPage: React.FC = () => {
  return (
    <PageContainer>
      <PageHeader
        title="Criar Usuário"
        comeBack={{ text: "Listagem de usuários", link: "/" }}
      />

      <UserForm />
    </PageContainer>
  );
};
