import { IGuitarChord } from "./IGuitarChord";

export interface IGuitarChords {
  main: {
    "strings": number,
    "fretsOnChord": number,
    "name": string,
    "numberOfChords": string
  },
  tunings: {
    "standard": string[]
  },
  keys: string[],
  suffixes: string[],
  chords: {
    "C": IGuitarChord[],
    "C#": IGuitarChord[],
    "D": IGuitarChord[],
    "Eb": IGuitarChord[],
    "E": IGuitarChord[],
    "F": IGuitarChord[],
    "G#": IGuitarChord[],
    "G": IGuitarChord[],
    "Ab": IGuitarChord[],
    "A": IGuitarChord[],
    "Bb": IGuitarChord[],
    "B": IGuitarChord[]
  }

}