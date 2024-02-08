import { Container } from "@mui/material";
import Link from "next/link";

export default async function Singin() {
  return (
    <Container>
      <h2>SignIn</h2>
      <Link href="api/auth/signin">Login</Link>
    </Container>
  );
}
