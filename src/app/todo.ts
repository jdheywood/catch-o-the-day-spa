export class Todo {
  id: number;
  title: string = '';
  complete: boolean = false;
  fish: string = '';
  weight: string = '';

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
