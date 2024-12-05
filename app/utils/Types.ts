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

export type DynamicObjectType = {
  [ key: string ]: string;
};

export type ContactLinkType = {
  label: string;
  href: string;
  value: string;
  icon: string;
};