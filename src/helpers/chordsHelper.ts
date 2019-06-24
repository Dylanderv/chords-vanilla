import { pianoChords } from "../db/pianoChords"
import { IPianoChordsType } from "../model/IPianoChordsType";
import { ukuleleChords } from "../db/ukuleleChords";
import { IUkuleleChords } from "../model/IUkuleleChords";
import { guitarChords } from "../db/guitarChords";
import { IGuitarChords } from "../model/IGuitarChords";

/**
 * Renvoie les accords de piano
 */
export function getAllPianoChords(): IPianoChordsType[] {
  return pianoChords.pianoChords;
}

/**
 * Renvoie les accords de ukulele
 */
export function getAllUkuleleChords(): IUkuleleChords {
  return ukuleleChords;
}

/**
 * Renvoie les accords de guitare
 */
export function getAllGuitarChords(): IGuitarChords {
  return guitarChords;
}
