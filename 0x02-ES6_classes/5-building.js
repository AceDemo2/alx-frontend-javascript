export default class Building {
  constructor(sqft) {
    if (new.target === Building) { // Check if we are trying to instantiate the abstract class
      throw new Error('Cannot instantiate an abstract class');
    }
    this.sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof value !== 'number') {
      throw new Error('sqft must be a number');
    }
    this._sqft = value;
  }

  // Static method that must be overridden
  static evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

