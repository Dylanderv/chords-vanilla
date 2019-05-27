export class PianoChord {
  private _name: string;
  private _keys: [{"name": string}]

  constructor(name: string, keys: [{"name": string}]) {
    this._name = name;
    this._keys = keys;
  }

  get name() {
    return this._name;
  }

  get keys() {
    return this._keys
  }
}