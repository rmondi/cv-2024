"use client";

import { useScopedI18n } from "@/locales/client";
import { Check, CircleX } from "lucide-react";

import "./EmailStatus.scss";

type EmailStatusType = {
  success: boolean;
};

const EmailStatus = ( { success }: EmailStatusType ) => {

  const t = useScopedI18n( "contact" );
  
  return (
    <div className={ `EmailStatus ${ success ? "success" : "error" }` }>
      <div className="EmailStatus__Icon">
        {
          success
          ? <Check strokeWidth={ 1.5 } />
          : <CircleX strokeWidth={ 1.5 } />
        }
      </div>
      <p className="EmailStatus__Message">
        { t( "emailSent" ) }
      </p>
    </div>
  );
}

export default EmailStatus;