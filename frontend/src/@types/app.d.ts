declare type LanguageKeyType = 'en-US';

declare interface StoreObject {
  lang: LanguageKeyType;
  theme: 'dark' | 'light';
  user: UserObject | null;
  isSlide: boolean;
  cookie: string | null;
}

declare interface NFTObject {
  address?: string;
  name: string;
  descrition: string;
  image: string;
  video?: string;
  artist?: Object;
}

declare interface TablentObject {
  name: string;
  picture: string;
  profession: string;
  price: number;
  // unit: string
  rate: number;
  favors: number;
  endjobs: number;
  skills: any[];
}

declare interface EmployerObject {}
