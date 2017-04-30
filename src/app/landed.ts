export class Landed {
  id: string;
  weight: string;
  fish: string;
  sold: boolean = false;

  constructor(values: Object ={}) {
    Object.assign(this, values);
  }
}