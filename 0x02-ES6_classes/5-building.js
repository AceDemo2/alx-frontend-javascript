export default class Building {
  constructor(sqft) {
    // Prevent direct instantiation of Building
    if (this.constructor === Building) {
      throw new Error('Cannot instantiate an abstract class');
    }

    // Ensure that any class extending Building implements evacuationWarningMessage
    if (typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }

    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}
