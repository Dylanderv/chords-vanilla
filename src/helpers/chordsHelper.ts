import { pianoChords } from "../db/pianoChords"
import { IPianoChordsType } from "../model/IPianoChordsType";
import { ukuleleChords } from "../db/ukuleleChords";
import { IUkuleleChords } from "../model/IUkuleleChords";

export function getAllPianoChords(): IPianoChordsType[] {
  return pianoChords.pianoChords;
}

export function getAllUkuleleChords(): IUkuleleChords {
  return ukuleleChords;
}
