export type AboutType = {
  name: string;
  job: string;
  introduction: string[];
  image: string;
};

export const AboutDefault: AboutType = {
  name: "",
  job: "",
  introduction: [],
  image: ""
};

export type SkillType = {
  title: string;
  icon: string;
  level?: string;
};

export const SkillDefault: SkillType = {
  title: "",
  icon: "",
  level: ""
};

export type SkillsType = {
  details: SkillType[];
  description: string[];
};

export const SkillsDefault: SkillsType = {
  details: [],
  description: []
};

export type ReferenceType = {
  image: string;
  title: string;
  url: string;
  tags: string[];
};

export const ReferenceDefault: ReferenceType = {
  image: "",
  title: "",
  url: "",
  tags: []
};

export type PortfolioType = {
  data: ReferenceType[];
};

export const PortfolioDefault: PortfolioType = {
  data: [ ReferenceDefault ]
};

export type ExperienceType = {
  image: string;
  url: string;
  title: string;
  start_date: string;
  end_date: string;
  city: string;
  country: string;
  type: string;
  description: string;
  tasks: string[];
  tags: string[];
};

export const ExperienceDefault: ExperienceType = {
  image: "",
  url: "",
  title: "",
  start_date: "",
  end_date: "",
  city: "",
  country: "",
  type: "",
  description: "",
  tasks: [ "" ],
  tags: [ "" ]
};

export type ExperiencesType = ExperienceType[];

export const ExperiencesDefault: ExperiencesType = [ ExperienceDefault ];

export type TagType = {
  label: string;
  linkable?: boolean;
  slug?: string;
};

export type FormType = {
  onSubmit: () => void;
  children: React.ReactNode;
};

export type FormRowType = {
  children: React.ReactNode;
};

export type FormColType = {
  children: React.ReactNode;
};

export type FormElementType = {
  children: React.ReactNode;
};

export type FormLabelType = {
  id: string;
  label: string;
  required?: boolean;
}

export type FormInputType = {
  id: string;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  value: string | number | readonly string[] | undefined;
  placeholder?: string;
  error?: string | null;
  onChange: ( e : React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> ) => void;
};

export type FormRGPDType = {
  error?: string | string[] | null;
  onChange: ( e : React.ChangeEvent<HTMLInputElement> ) => void;
};

export type FormSubmitType = {
  value: string;
};

export type FormErrorType = {
  message: string | string[] | null;
};

export type DynamicObjectType = {
  [ key: string ]: string;
};

export type ContactFormType = {
  fullname: string;
  email: string;
  message: string;
  rgpd: string[];
};

export type ValidateErrorsType = {
  [ key: string ]: string;
};

export type ContactLinkType = {
  type: string;
  label: string;
  href: string;
  value: string;
  icon: string;
};

export const ContactLinkDefault: ContactLinkType = {
  type: "",
  label: "",
  href: "",
  value: "",
  icon: ""
};

export type ContactType = {
  name: string;
  links: ContactLinkType[];
};

export const ContactDefault: ContactType = {
  name: "",
  links: [ ContactLinkDefault ]
};

export type GSAPType = {
  [ key: string ]: string | number;
};

export const GSAPOptions: GSAPType = {
  y: 0,
  ease: "elastic",
  duration: 2,
  opacity: 1,
};