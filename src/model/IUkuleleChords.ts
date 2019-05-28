import { IUkuleleChord } from "./IUkuleleChord";

export interface IUkuleleChords {
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
    "C": IUkuleleChord[],
    "Db": IUkuleleChord[],
    "D": IUkuleleChord[],
    "Eb": IUkuleleChord[],
    "E": IUkuleleChord[],
    "F": IUkuleleChord[],
    "Gb": IUkuleleChord[],
    "G": IUkuleleChord[],
    "Ab": IUkuleleChord[],
    "A": IUkuleleChord[],
    "Bb": IUkuleleChord[],
    "B": IUkuleleChord[]
  }

}