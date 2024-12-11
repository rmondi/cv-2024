"use client";

import { useScopedI18n } from "@/locales/client";
import { useFormik } from "formik";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import Title from "../Title/Title";
import Paragraph from "../Paragraph/Paragraph";
import {
  Form,
  FormRow,
  FormCol,
  FormInput,
  FormTextarea,
  FormRGPD,
  FormSubmit } from "../Form/Form";

import { ContactFormType, ValidateErrorsType } from "@/app/utils/Types";

import "./Contact.scss";

const Contact = () => {

  const t = useScopedI18n( "contact" );
  const { executeRecaptcha } = useGoogleReCaptcha();

  const initialValues: ContactFormType = {
    fullname: "",
    email: "",
    message: "",
    rgpd: []
  };

  const validate = async ( values: ContactFormType ) => {
    const errors: ValidateErrorsType = {};

    if ( !values.fullname ) {
      errors.fullname = t( "mandatory" );
    }

    if ( !values.email ) {
      errors.email = t( "mandatory" );
    } else if ( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test( values.email ) ) {
      errors.email = t( "wrongEmailPattern" );
    }

    if ( !values.message ) {
      errors.message = t( "mandatory" );
    }

    if ( values.rgpd.length === 0 ) {
      errors.rgpd = t( "mandatory" );
    }

    return errors;
  };

  const onSubmit = async ( values: ContactFormType ) => {

    /** Test if Recaptcha is available */
    if ( !executeRecaptcha ) {
      console.error( "Not able to execute Recaptcha." );
      return;
    }

    /** Get Recaptcha Token */
    const gRecaptchaToken = await executeRecaptcha( "inquirySubmit" );

    const headers = new Headers();
    headers.append( "Accept", "application/json, text/plain, */*" );
    headers.append( "Content-Type", "application/json" );

    const { success } = await fetch( "/api/recaptchaSubmit", {
      method: "POST",
      headers,
      body: JSON.stringify( { gRecaptchaToken } )
    } )
    .then( response => response.json() )
    .catch( error => console.error( error ) );

    console.log(success);
  };

  const formik = useFormik( {
    initialValues,
    validate,
    onSubmit
  } );
  
  return (
    <div className="Contact">
      <div className="Contact__Wrapper">
        <div className="Contact__Header">
          <Title level={ 2 }>
            { t( "title" ) }
          </Title>
        </div>
        <div className="Contact__Body">
          <div className="Contact__Description">
            <Paragraph>{ t( "description" ) }</Paragraph>
          </div>
          <div className="Contact__Form">
            <Form onSubmit={ formik.handleSubmit }>
              <FormRow>
                <FormCol>
                  <FormInput
                    type="text"
                    label={ t( "name" ) }
                    id="fullname"
                    name="fullname"
                    value={ formik.values.fullname }
                    error={ formik.errors.fullname ? formik.errors.fullname : null }
                    required={ true }
                    onChange={ formik.handleChange }
                  />
                </FormCol>
                <FormCol>
                  <FormInput
                    type="email"
                    label={ t( "email" ) }
                    id="email"
                    name="email"
                    value={ formik.values.email }
                    error={ formik.errors.email ? formik.errors.email : null }
                    required={ true }
                    onChange={ formik.handleChange }
                  />
                </FormCol>
              </FormRow>
              <FormRow>
                <FormCol>
                  <FormTextarea
                    id="message"
                    name="message"
                    label={ t( "message" ) }
                    value={ formik.values.message }
                    error={ formik.errors.message ? formik.errors.message : null }
                    required={ true }
                    onChange={ formik.handleChange }
                  />
                </FormCol>
              </FormRow>
              <FormRow>
                <FormCol>
                  <FormRGPD
                    error={ formik.errors.rgpd ? formik.errors.rgpd : null }
                    onChange={ formik.handleChange }
                  />
                </FormCol>
              </FormRow>
              <FormRow>
                <FormCol>
                  <FormSubmit value={ t( "submit" ) } />
                </FormCol>
              </FormRow>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;