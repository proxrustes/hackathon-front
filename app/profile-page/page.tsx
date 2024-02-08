import { authConfig } from "@/configs/auth";
import { Container } from "@mui/material";
import { getServerSession } from "next-auth/next";

export default async function ProfilePage() {
  const session = await getServerSession(authConfig);

  return (
    <Container>
      <h2>Profile page</h2>
      <p>Profile of {session?.user?.name}</p>
    </Container>
  );
}
