const correspondanceEnFr = {
  "C": "Do",
  "D": "Ré",
  "E": "Mi",
  "F": "Fa",
  "G": "Sol",
  "A": "La",
  "B": "Si"
}

export function getFrChord(enChord: string) {
  let frMain = correspondanceEnFr[enChord.charAt(0)];
  return frMain + enChord.substring(1);
}
