import { Character } from "./character";
import { SourceInfo } from "./sourceInfo";

export interface ServerAnswer {
  characters: {
    info: SourceInfo;
    results: Character[];
  };
}
