import type { Metadata } from "next";
import { LangProvider } from "./utils/context/Lang";
import Container from "./components/Container/Container";

import "./styles/Globals.scss";

export const metadata: Metadata = {
  title: "Rémy Mondi | Développeur front-end React, Next.js & Typescript",
  description: "Rémy Mondi | Développeur front-end React, Next.js & Typescript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <LangProvider>
          <Container>
            {children}
          </Container>
        </LangProvider>
      </body>
    </html>
  );
}
