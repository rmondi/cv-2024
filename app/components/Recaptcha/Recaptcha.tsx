"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

type RecaptchaType = {
  children: React.ReactNode;
};

const Recaptcha = ( { children }: RecaptchaType ) => {
  const recaptchaKey: string | undefined = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={ recaptchaKey as string ?? "NOT DEFINED" }
    >
      { children }
    </GoogleReCaptchaProvider>
  )
}

export default Recaptcha;