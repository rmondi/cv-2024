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
};

export const SkillDefault: SkillType = {
  title: "",
  icon: ""
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

export type PortfolioType = {
  data: ReferenceType[];
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

export type CareerType = {
  data: ExperienceType[];
};

export type TagType = {
  label: string;
  linkable?: boolean;
  slug?: string;
};

export type DynamicObjectType = {
  [ key: string ]: string;
};

export type ContactLinkType = {
  label: string;
  href: string;
  value: string;
  icon: string;
};