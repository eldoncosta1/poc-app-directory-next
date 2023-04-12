import { User } from "@/types/User";
import { UserForm } from "@/components/UserForm/UserForm";
import { PageHeader } from "@/components/PageHeader/PageHeader";

import { PageContainer } from "@/styles/Containers";

interface EditUserPageProps {
  user: User;
}

export const EditUserPage: React.FC<EditUserPageProps> = ({ user }) => {
  return (
    <PageContainer>
      <PageHeader
        title="Editar Usuário"
        comeBack={{ text: "Listagem de usuários", link: "/" }}
      />

      <UserForm user={user} />
    </PageContainer>
  );
};
