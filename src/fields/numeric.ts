import { Field } from './field';

export class NumericField extends Field {
  private readonly NUMERIC = 'NUMERIC';
  constructor(
    name: string,
    sortable: boolean = false,
    noIndex: boolean = false
  ) {
    super(name);
    this.addArg(this.NUMERIC);
    if (sortable) {
      this.addArg(this.SORTABLE);
    }
    if (noIndex) {
      this.addArg(this.NOINDEX);
    }
    if (noIndex && !sortable) {
      throw new Error('Non-Sortable non-Indexable fields are ignored');
    }
  }
}
