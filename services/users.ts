import { User } from "@/types/User";
import { env } from "../env";
import { UserFormInputs } from "@/components/UserForm/UserForm";

const baseURL = "https://dummyapi.io/data/v1";

export async function getUsers(): Promise<User[]> {
  const response = await fetch(`${baseURL}/user?created=1`, {
    headers: {
      "app-id": env.apiTokenKey,
    },
    next: { revalidate: 1 },
  });
  const usersData = await response.json();

  return usersData.data;
}

export async function getUser(userId: string): Promise<User> {
  const response = await fetch(`${baseURL}/user/${userId}`, {
    headers: {
      "app-id": env.apiTokenKey,
    },
    cache: "no-store", // getServerSideProps
  });
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
  const userData = await response.json();
  return userData;
}

export async function createUser(data: UserFormInputs): Promise<User> {
  const response = await fetch(`${baseURL}/user/create`, {
    headers: {
      "app-id": env.apiTokenKey,
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  });
  const userData = await response.json();
  return userData;
}

export async function putUser(
  userId: string,
  data: UserFormInputs
): Promise<User> {
  const response = await fetch(`${baseURL}/user/${userId}`, {
    headers: {
      "app-id": env.apiTokenKey,
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify(data),
  });
  const userData = await response.json();
  return userData;
}
