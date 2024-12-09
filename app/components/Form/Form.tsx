"use client";

import {
  FormType,
  FormRowType,
  FormColType,
  FormElementType,
  FormLabelType,
  FormInputType,
  FormSubmitType,
  FormErrorType
} from "@/app/utils/Types";

import "./Form.scss";

/** Form */
export const Form = ( { onSubmit, children }: FormType ) => {
  
  return (
    <form
      className="Form"
      onSubmit={ onSubmit }
    >
      { children }
    </form>
  );
}

/** Form Row */
export const FormRow = ( { children }: FormRowType ) => {

  return (
    <div className="Form__Row">
      { children }
    </div>
  );
};

/** Form Col */
export const FormCol = ( { children }: FormColType ) => {

  return (
    <div className="Form__Col">
      <FormElement>
        { children }
      </FormElement>
    </div>
  );
};

/** Form Element */
export const FormElement = ( { children }: FormElementType ) => {

  return (
    <div className="Form__Element">
      { children }
    </div>
  );
};

/** Form Label */
export const FormLabel = ( { id, label, required = false }: FormLabelType ) => {

  return (
    <label
      htmlFor={ id }
      className={ `Form__Label${ required ? " required" : "" }` }>
      { label }
    </label>
  )
};

/** Form Input */
export const FormInput = ( {
  id,
  name,
  label,
  type,
  value,
  required = false,
  placeholder = "",
  error = null,
  onChange }: FormInputType ) => {

  return (
    <FormElement>
      <FormLabel id={ id } label={ label } required={ required } />
      <input
        className={ `Form__Input${ error !== null ? " error" : "" }` }
        type={ type }
        id={ id }
        name={ name }
        value={ value }
        placeholder={ placeholder }
        onChange={ onChange }
      />
      { error !== null && <FormError message={ error } /> }
    </FormElement>
  );
};

/** Form Textarea */
export const FormTextarea = ( {
  id,
  name,
  label,
  value,
  required = false,
  error = null,
  onChange }: FormInputType ) => {

  return (
    <FormElement>
      <FormLabel id={ id } label={ label } required={ required } />
      <textarea
        className={ `Form__Textarea${ error !== null ? " error" : "" }` }
        id={ id }
        name={ name }
        value={ value }
        onChange={ onChange }
      >
      </textarea>
      { error !== null && <FormError message={ error } /> }
    </FormElement>
  );
};

/** Form Submit */
export const FormSubmit = ( { value }: FormSubmitType ) => {

  return (
    <FormElement>
      <button
        type="submit"
        className="Form__Submit"
      >
        { value }
      </button>
    </FormElement>
  );
};

/** Form Error */
export const FormError = ( { message }: FormErrorType ) => {

  return (
    <p className="Form__Error">{ message }</p>
  );
};
