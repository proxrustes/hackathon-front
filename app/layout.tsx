import { Header } from "@/components/Header";
import { lightTheme } from "@/styles/theme";
import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rohate Zhabenya",
  description: "Благодійний Аукціон",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider theme={lightTheme}>
      <>
        <Header />
        {children}
      </>
    </ThemeProvider>

  );
}
