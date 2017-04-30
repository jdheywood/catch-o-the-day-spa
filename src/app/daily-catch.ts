import {Landed} from './landed';

export class DailyCatch {
  id: string;
  day: string = '';
  weather: string = '';
  landed: Landed[] = [];

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
