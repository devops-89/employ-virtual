import { StaticImageData } from "next/image";

export interface HERO_CARD_PROPS {
  img: StaticImageData;
  title: string;
  description: string;
}

export interface WHY_EMPLOY_PROPS {
  img: StaticImageData;
  title: string;
  description: string;
  color: string;
}

export interface PARTNER_CARD_PROPS {
  img: StaticImageData;
  name: string;
}

export interface LIST {
  label?: string;
  value?: string;
}

export interface URLPROPS {
  label: string;
  url?: string;
}

export interface FOOTER_LINKS {
  heading: string;
  data: URLPROPS[];
}

export interface OFFER_CARD_PROPS {
  heading: string;
  img: StaticImageData;
  description: string;
}

export interface SUITED_CARD_DATA {
  heading: string;
  description: string;
  CARD_DATA: WHY_EMPLOY_PROPS[];
  isButton: boolean;
}

export interface SERVICE_CARD_PROPS {
  img: StaticImageData;
  heading: string;
  data: URLPROPS[];
}

export interface CountryType {
  code: string;
  label: string;
  phone: string;
  suggested?: boolean;
}

export interface ADDRESS_TYPE {
  country: string;
  streetAddress: string;
  addressLine1: string;
  addressLine2: string;
  phoneNumber: string;
  email: string;
  img: string;
}

export interface HIRE_LIST {
  heading: string;
  data: LIST[];
}

export interface VIRTUAL_CARD_PROPS {
  heading: string;
  description: string;
  slug: string;
}

export interface detailsList {
  heading: string;
  data: LIST[];
}

export interface DETAILS_DATA {
  slug: string;
  bannerHeading: string;
  bannerDescription: string;
  img: StaticImageData;
  heading: string;
  description: LIST[];
  details_list: detailsList[];
}
