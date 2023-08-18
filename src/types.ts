import { Timestamp } from "@firebase/firestore-types";

export type Id = number | string;

export enum CurrencyCode {
  EGP = "EGP",
}

export enum DefaultLocation {
  LONGITUDE = "27.9654",
  LATITUDE = "34.3618",
}

export enum OfferStatusCode {
  PENDING = 0,
  ACCEPTED = 1,
  REJECTED = 2,
  COMPLETED = 3,
}

export interface AddOrderDataType {
  title: string;
  expected_cost: string;
  expected_hours: string;
  experience_years: string;
  currency_code: CurrencyCode;
  qualification: string;
  category_id: Id;
  city_id: Id;
  description: string;
  latitude: string;
  longitude: string;
}

export interface Translate {
  ar: string;
  en: string;
}

export interface CityState {
  id: Id;
  image: string;
  name: Translate;
  nationality: Translate;
  key: string;
  code: string;
}

export interface City {
  id: Id;
  name: Translate;
  state_id: Id;
  state: CityState;
}

export interface Category {
  id: Id;
  name: Translate;
  description: Translate;
  image: string;
}

export interface User {
  id: number;
  name: string;
  last_name: string;
  email: string;
  phone: string;
  image: string;
  type: string;
  specialization: string;
  birth_date: string;
  address: string;
  city_id: string;
  about: string;
  rate: number;
  average_cost: number;
  accomplish_tasks: number;
  skills: string[];
  certificates: {
    year: string;
    title: string;
  }[];
  university: string;
  graduation_year: string;
  experiences: {
    year: string;
    title: string;
    desc: string;
  }[];
}

export interface Profile {
  [key: string]: any;
}

export interface Ad {
  id: number;
  name: string;
  description: string;
  expected_cost: number;
  expected_hours: number;
  currency_code: string;
  qualification: string;
  experience_years: number;
  created_at: string;
  category: {
    [key: string]: string;
  };
  city: {
    [key: string]: string;
  };
  hospital: {
    id: number;
    name: string;
    last_name: string | null;
    email: string;
    phone: string;
    specialization: string | null;
    type: string;
    rate: number;
    accomplish_tasks: number;
    about: string | null;
    image: string;
    average_cost: number | null;
    skills: string[] | null;
    certificates: string[] | null;
    university: string | null;
    graduation_year: number | null;
    experiences: string[] | null;
    address: string | null;
    city: string;
  };
  offer: Offer[];
  offer_count: number;
  image: string;
}

export interface Offer {
  id: number;
  hours_number: number;
  price: number;
  message: string;
  status: string;
  technical: {
    id: number;
    name: string;
    last_name: string | null;
    email: string;
    phone: string;
    specialization: string | null;
    type: string;
    rate: number;
    accomplish_tasks: number;
    about: string | null;
    image: string;
    average_cost: number | null;
    skills: string[] | null;
    certificates: string[] | null;
    university: string | null;
    graduation_year: number | null;
    experiences: string[] | null;
    address: string | null;
    city: string;
  };
}

export interface Chat {
  id: Timestamp | Id;
  between: Id[];
  content: string;
  send_at: Timestamp;
  sender_id: Id;
  seen: boolean;
}

export interface UserOffer extends Offer {
  order: Ad;
}
