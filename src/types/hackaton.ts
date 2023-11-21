export interface HackatonBase {
  title: string;
  image_url: string;
  description: string;
  descriptionShort: string;
  creator: string;
  tracks: string[];
  grand_prize: string;
  roles: string[];
  location: string;
  is_online: boolean;
}
export interface Hackaton extends HackatonBase {
  start_registration: Date;
  end_registration: Date;
  start: Date;
  end: Date;
}

export interface HackatonResponse extends HackatonBase {
  start_registration: string;
  end_registration: string;
  start: string;
  end: string;
}

export type HackatonsFilter =
  | "all"
  | "forme"
  | "participate"
  | "hidden"
  | "favorite";

export type HackatonsView = "list" | "grid";
