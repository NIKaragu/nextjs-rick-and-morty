import { Status } from "../enums/char-status";
import { Gender } from "../enums/gender";
import { Episode } from "./episode";

export interface Character {
  id: number;
  name: string;
  status: Status;
  species: string;
  type: string;
  gender: Gender;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
  image: string;
  episode: Episode[];
  url: string;
  created: string;
}
