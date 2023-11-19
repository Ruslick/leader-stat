export interface Hackaton {
  title: string;
  imageUrl: string;
  description: string;
  descriptionShort: string;
  creator: string;
  start_registration: Date;
  end_registration: Date;
  start: Date;
  end: Date;
  tracks: string[];
  grandPrize: string;
  roles: string[];
  location: string;
  isOnline: boolean;
}

export type HackatonsFilter =
  | "all"
  | "forme"
  | "participate"
  | "hidden"
  | "favorite";

export type HackatonsView = "list" | "grid";
