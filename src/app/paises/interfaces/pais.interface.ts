export interface Pais {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc?: string;
  independent: boolean;
  status: Status;
  unMember: boolean;
  currencies?: Currencies;
  idd: Idd;
  capital?: string[];
  altSpellings: string[];
  region: Region;
  subregion?: string;
  languages: { [key: string]: string };
  translations: { [key: string]: Translation };
  latlng: number[];
  landlocked: boolean;
  borders?: string[];
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  gini?: { [key: string]: number };
  fifa?: string;
  car: Car;
  timezones: string[];
  continents: Continent[];
  flags: CoatOfArms;
  coatOfArms: CoatOfArms;
  startOfWeek: StartOfWeek;
  capitalInfo: CapitalInfo;
  postalCode?: PostalCode;
}

export interface CapitalInfo {
  latlng?: number[];
}

export interface Car {
  signs: string[];
  side: Side;
}

export enum Side {
  Left = "left",
  Right = "right",
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export enum Continent {
  Africa = "Africa",
  Antarctica = "Antarctica",
  Asia = "Asia",
  Europe = "Europe",
  NorthAmerica = "North America",
  Oceania = "Oceania",
  SouthAmerica = "South America",
}

export interface Currencies {
  IQD?: Afn;
  HKD?: Afn;
  USD?: Afn;
  TZS?: Afn;
  DJF?: Afn;
  EUR?: Afn;
  AMD?: Afn;
  CZK?: Afn;
  HTG?: Afn;
  ALL?: Afn;
  LBP?: Afn;
  MAD?: Afn;
  SYP?: Afn;
  BTN?: Afn;
  INR?: Afn;
  IRR?: Afn;
  TND?: Afn;
  CHF?: Afn;
  YER?: Afn;
  GMD?: Afn;
  TRY?: Afn;
  BAM?: BAM;
  BWP?: Afn;
  SCR?: Afn;
  KRW?: Afn;
  AUD?: Afn;
  GHS?: Afn;
  TWD?: Afn;
  KHR?: Afn;
  XCD?: Afn;
  BSD?: Afn;
  MMK?: Afn;
  SOS?: Afn;
  VND?: Afn;
  JOD?: Afn;
  NZD?: Afn;
  CDF?: Afn;
  ETB?: Afn;
  MOP?: Afn;
  XPF?: Afn;
  PKR?: Afn;
  SHP?: Afn;
  LAK?: Afn;
  MKD?: Afn;
  GBP?: Afn;
  BHD?: Afn;
  BMD?: Afn;
  AFN?: Afn;
  UGX?: Afn;
  MVR?: Afn;
  KMF?: Afn;
  CNY?: Afn;
  MRU?: Afn;
  DZD?: Afn;
  CLP?: Afn;
  SDG?: BAM;
  XAF?: Afn;
  JPY?: Afn;
  LSL?: Afn;
  ZAR?: Afn;
  SSP?: Afn;
  TJS?: Afn;
  KPW?: Afn;
  ANG?: Afn;
  HNL?: Afn;
  KES?: Afn;
  THB?: Afn;
  SAR?: Afn;
  BDT?: Afn;
  PHP?: Afn;
  KZT?: Afn;
  BND?: Afn;
  SGD?: Afn;
  HRK?: Afn;
  HUF?: Afn;
}

export interface Afn {
  name: string;
  symbol: string;
}

export interface BAM {
  name: string;
}

export interface Demonyms {
  eng: Eng;
  fra?: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Idd {
  root?: string;
  suffixes?: string[];
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common: string;
}

export interface PostalCode {
  format: string;
  regex?: string;
}

export enum Region {
  Africa = "Africa",
  Americas = "Americas",
  Antarctic = "Antarctic",
  Asia = "Asia",
  Europe = "Europe",
  Oceania = "Oceania",
}

export enum StartOfWeek {
  Monday = "monday",
  Saturday = "saturday",
  Sunday = "sunday",
}

export enum Status {
  OfficiallyAssigned = "officially-assigned",
}
