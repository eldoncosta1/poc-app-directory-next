import { EditUserPage } from "@/app/pages/User/Edit/EditUser";
import { getUser } from "@/services/users";

export const metadata = {
  title: "Editar Usuário | PeopleAdmin",
};

interface EditUserProps {
  params: {
    userId: string;
  };
}

export default async function EditUser({ params: { userId } }: EditUserProps) {
  const user = await getUser(userId);

  return <EditUserPage user={user} />;
}
