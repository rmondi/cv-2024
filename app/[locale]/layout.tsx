import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
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
              <Analytics />
              <SpeedInsights />
            </Recaptcha>
          </Container>
        </I18nProviderClient>
      </body>
    </html>
  );
}
