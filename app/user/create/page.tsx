import { CreateUserPage } from "@/app/pages/User/Create/CreateUser";

export const metadata = {
  title: "Criar Usuário | PeopleAdmin",
};

export default async function CreateUser() {
  return <CreateUserPage />;
}
