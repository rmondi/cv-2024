import { I18nProviderClient } from "@/locales/client";

import Container from "../components/Container/Container";
import Recaptcha from "../components/Recaptcha/Recaptcha";

import "../styles/Globals.scss";

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
            <Recaptcha>
              {children}
            </Recaptcha>
          </Container>
        </I18nProviderClient>
      </body>
    </html>
  );
}
