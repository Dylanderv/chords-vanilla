import {pianoChords} from "./pianoChords"
import { IPianoChordsType } from "../model/IPianoChordsType";

export function getAllPianoChords(): IPianoChordsType[] {
  return pianoChords.pianoChords;
}