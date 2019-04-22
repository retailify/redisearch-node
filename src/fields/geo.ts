import { Field } from '.';

export class GeoField extends Field {
  private readonly GEO = 'GEO';
  
  constructor(name: string) {
    super(name);
    this.addArg(this.GEO);
  }
}
