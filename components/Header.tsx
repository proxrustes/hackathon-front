"use client";

import { Button, IconButton, Stack, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export function Header() {
  const { data: session } = useSession();

  return (
    <>
      <Stack direction="row" justifyContent="space-between" sx={{ mx: 10 }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: 600, color: "text.primary" }}
        >
          Rohate Zhabenya
        </Typography>
        <Stack direction="row" gap={2} alignItems="center">
          <Button
            variant="outlined"
            href="/create-lot"
            sx={{ color: "text.primary", height: "32px" }}
          >
            create lot
          </Button>
          <IconButton
            sx={{ backgroundColor: "text.primary", color: "white" }}
            href={session ? "/profile-page" : "/signin"}
          >
            <AccountCircleIcon />
          </IconButton>
          {session && (
            <>
              <Link href="#" onClick={() => signOut({ callbackUrl: "/" })}>
                Sign Out
              </Link>
            </>
          )}
        </Stack>
      </Stack>
    </>
  );
}
