
export class Field {
  protected readonly WEIGHT = 'WEIGHT';
  protected readonly SORTABLE = 'SORTABLE';
  protected readonly NOINDEX = 'NOINDEX';

  protected _args: Array<string|number>;

  constructor(name: string) {
    this._args = new Array<string|number>(name);
  }

  protected addArg(arg: string|number) {
    this._args.push(arg);
  }

  protected addArgs(args: any[]) {
    this._args = this._args.concat(args);
  }

  args():  Array<string|number> {
    return this._args;
  }
}
