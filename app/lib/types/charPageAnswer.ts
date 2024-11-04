import { Character } from "./character";
import { SourceInfo } from "./sourceInfo";

export interface CharPageAnswer {
  characters: {
    info: SourceInfo;
    results: Character[];
  };
}
