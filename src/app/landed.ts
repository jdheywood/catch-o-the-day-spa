export class Landed {
  _id: string;
  weight: string;
  fish: string;
  sold: boolean = false;

  constructor(values: Object ={}) {
    Object.assign(this, values);
  }
}