import { Field } from './field';

export class TagField extends Field {
  private readonly TAG = 'TAG';
  private readonly STD_SEPARATOR = ',';
  private readonly SEPARATOR = 'SEPARATOR';
  
  constructor(name: string, noIndex: boolean = false, separator: string = ',') {
    super(name);
    this.addArg(this.TAG);
    if (separator !== this.STD_SEPARATOR) {
      this.addArg(this.SEPARATOR);
      this.addArg(separator);
    }
    if (noIndex) {
      this.addArg(this.NOINDEX);
    }
  }
}
