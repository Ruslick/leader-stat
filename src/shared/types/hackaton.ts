export interface HackatonBase {
  id: number;
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

export interface HackatonDTO extends HackatonBase {
  start_registration: string;
  end_registration: string;
  start: string;
  end: string;
}

export type FiltersNames = "id" | "is_online" | "location" | "page" | "page_size" | "title";

export interface LocationsDTO {
  result: string[];
}
