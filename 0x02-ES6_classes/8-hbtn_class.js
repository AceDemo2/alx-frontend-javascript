export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  get size() {
    return this._size;
  }

  set size(val) {
    if (typeof val !== 'number') {
      throw new Error('Size must be a number');
    }
    this._size = val;
  }

  get location() {
    return this._location;
  }

  set location(val) {
    if (typeof val !== 'string') {
      throw new Error('Location must be a string');
    }
    this._location = val;
  }

  valueOf() {
    return this.size;
  }

  toString() {
    return this.location;
  }
}
