import { IGuitarPosition } from "./IGuitarPosition";

export interface IGuitarChord {
  key: string,
  suffix: string,
  positions: IGuitarPosition[]

}