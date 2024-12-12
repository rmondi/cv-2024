import { NextResponse } from "next/server";
import Email from "@/app/components/Email/Email";
import { Resend } from "resend";

const resend = new Resend( process.env.RESEND_API_KEY );

export async function POST( request: Request ) {

  const postData = await request.json();

  const { fullname, email, message, rgpd } = postData;

  try {
    const { data, error } = await resend.emails.send( {
      from: `${ fullname } <no-reply@rmondi.dev>`,
      to: [ process.env.RESEND_TO as string ],
      subject: process.env.RESEND_SUBJECT as string,
      react: Email( {
        fullname,
        email,
        message,
        rgpd
      } ),
    } );

    if ( error ) {
      return NextResponse.json( { error }, { status: 500 } );
    }

    return NextResponse.json( data );
  } catch ( error ) {
    return NextResponse.json( { error }, { status: 500 } );
  }
}