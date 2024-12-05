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

export type ContactLinkType = {
  label: string;
  href: string;
  value: string;
  icon: string;
};