import { NextResponse } from "next/server";
import queryString from "query-string";

export const POST = async ( request: Request ) => {

  const postData = await request.json();

  const { gRecaptchaToken } = postData;

  const params = {
    secret: process.env.RECAPTCHA_SECRET_KEY,
    response: gRecaptchaToken
  };

  const query = queryString.stringify( params );

  const headers = new Headers();
  headers.append( "Content-Type", "application/x-www-form-urlencoded" );

  let res;

  try {
    res = await fetch( `https://www.google.com/recaptcha/api/siteverify?${ query }`, {
      method: "POST",
      headers
    } )
    .then( response => response.json() )
    .catch( error => console.error( error ) );
  } catch( error ) {
    console.error( error );
    return NextResponse.json( { success: false } );
  }

  if ( res && res.success && res.score >  0.5) return NextResponse.json( { success: true } );
  else return NextResponse.json( { success: false } );
};