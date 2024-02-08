import { Header } from "@/components/Header";
import { Providers } from "@/components/Providers";
import { lightTheme } from "@/styles/theme";
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
        <Providers>
          <html lang="en">
            <body>    <Header />
              {children}</body>
          </html>

        </Providers>
      </>
    </ThemeProvider>
  );
}
