import { Field } from './field';

export class TextField extends Field {
  private readonly TEXT = 'TEXT';
  private readonly NOSTEM: string = 'NOSTEM';

  constructor(
    name: string,
    weight: number = 1.0,
    sortable: boolean = false,
    noStem: boolean = false,
    noIndex: boolean = false
  ) {
    super(name);
    this.addArgs([this.TEXT, this.WEIGHT, weight]);
    if (sortable) {
      this.addArg(this.SORTABLE);
    }
    if (noStem) {
      this.addArg(this.NOSTEM);
    }
    if (noIndex) {
      this.addArg(this.NOINDEX);
    }
    if (noIndex && !sortable) {
      throw new Error('Non-Sortable non-Indexable fields are ignored');
    }
  }
}
