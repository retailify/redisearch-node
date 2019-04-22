export class Limit {
  private _offset: number;
  private _count: number;

  constructor(offset: number = 0, count: number = 0) {
    this._offset = offset;
    this._count = count;
  }

  args(): any[] {
      if (this._count > 0) {
          return ['LIMIT', this._offset, this._count];
      }
      return []
  }
}
