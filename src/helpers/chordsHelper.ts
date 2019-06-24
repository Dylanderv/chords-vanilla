import { pianoChords } from "../db/pianoChords"
import { IPianoChordsType } from "../model/IPianoChordsType";
import { ukuleleChords } from "../db/ukuleleChords";
import { IUkuleleChords } from "../model/IUkuleleChords";
import { guitarChords } from "../db/guitarChords";
import { IGuitarChords } from "../model/IGuitarChords";

export function getAllPianoChords(): IPianoChordsType[] {
  return pianoChords.pianoChords;
}

export function getAllUkuleleChords(): IUkuleleChords {
  return ukuleleChords;
}

export function getAllGuitarChords(): IGuitarChords {
  return guitarChords;
}
