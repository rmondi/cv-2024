import { ContactFormType } from "@/app/utils/Types";

const Email = ( { fullname, email, message, rgpd }: ContactFormType ) => {
  
  return (
    <div>
      <p><strong>De : </strong>{ `${ fullname } (${ email })` }</p>
      <p><strong>Message : </strong>{ message }</p>
      <p><strong>RGPD : </strong> { rgpd }</p>
    </div>
  )
}

export default Email;