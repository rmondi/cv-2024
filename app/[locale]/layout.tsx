import type { Metadata } from "next";
import Container from "../components/Container/Container";
import { I18nProviderClient } from "@/locales/client";

import "../styles/Globals.scss";

export const metadata: Metadata = {
  title: "Rémy Mondi | Développeur front-end React, Next.js & Typescript",
  description: "Rémy Mondi | Développeur front-end React, Next.js & Typescript",
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string; }>
}>) {
  const { locale } = await params;

  return (
    <html lang="fr">
      <body>
        <I18nProviderClient locale={ locale }>
          <Container>
            {children}
          </Container>
        </I18nProviderClient>
      </body>
    </html>
  );
}
