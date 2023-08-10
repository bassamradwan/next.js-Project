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
