export class Landed {
  id: string;
  weight: string;
  fish: string;

  constructor(values: Object ={}) {
    Object.assign(this, values);
  }
}