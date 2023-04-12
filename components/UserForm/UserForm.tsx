"use client";

import { User } from "@/types/User";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Input } from "@lets-code-br/design-system-web";
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
} from "@tanstack/react-query";
import { createUser, putUser } from "@/services/users";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import * as S from "./user-form.styles";
import { queryClient } from "@/services";

export type UserFormInputs = {
  firstName: string;
  lastName: string;
  email: string;
  picture: string;
};

interface UserFormProps {
  user?: User;
}

const UserFormWithProviders: React.FC<UserFormProps> = ({ user }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormInputs>({
    defaultValues: {
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.email,
      picture: user?.picture,
    },
  });

  const updateUserMutation = useMutation<User, unknown, UserFormInputs>({
    mutationFn: (data) => putUser(user?.id || "", data),
    onSuccess: () => {
      toast.success("Usuário atualizado com sucesso!");
      router.push("/");
    },
  });

  const createUserMutation = useMutation<User, unknown, UserFormInputs>({
    mutationFn: (data) => createUser(data),
    onSuccess: () => {
      toast.success("Usuário criado com sucesso!");
      router.push("/");
    },
  });

  const onSubmit: SubmitHandler<UserFormInputs> = async (data) => {
    if (user) {
      await updateUserMutation.mutateAsync(data);
    } else {
      await createUserMutation.mutateAsync(data);
    }

    queryClient.invalidateQueries();
  };

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <Input label="Nome" {...register("firstName")} />

      <Input label="Sobrenome" {...register("lastName")} />

      <Input label="E-mail" {...register("email")} readOnly={user != null} />

      <Input label="URL da Imagem" {...register("picture")} />

      <Button>Salvar</Button>
    </S.Form>
  );
};

export function UserForm({ user }: UserFormProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <UserFormWithProviders user={user} />
    </QueryClientProvider>
  );
}
