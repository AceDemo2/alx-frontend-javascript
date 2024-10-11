export default class Airport {
  constructor(name, code) {
    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code;
  }

  set code(val) {
    if (typeof val !== 'string') {
      throw new Error('Code must be a string');
    }
    this._code = val;
  }

  get name() {
    return this._name;
  }

  set name(val) {
    if (typeof val !== 'string') {
      throw new Error('Name must be a string');
    }
    this._name = val;
  }

  toString() {
    return `[object ${this.code}]`;
  }
}
