import {Injectable} from '@angular/core';
import {Todo} from './todo';
import {Fish} from './fish';
import {Landed} from './landed';
import {DailyCatch} from "./daily-catch";

@Injectable()
export class DataService {

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId: number = 0;

  // Placeholders for actual data

  // types of fish the app supports, populate via code initially then wire up to API
  catfish: Fish = {id: 1, name: 'Catfish'};
  pike: Fish = {id: 2, name: 'Pike'};
  trout: Fish = {id: 3, name: 'Trout'};
  fish: Fish[] = [this.catfish, this.pike, this.trout];

  // Daily catch
  dailyCatch: DailyCatch;

  // Landed fish
  landed: Landed[] = [];

  constructor() {
  }

  // Simulate GET /fish
  getFish(): Fish[] {
    return this.fish;
  }

  // Simulate POST /catches
  createDailyCatch(landed: Landed): DailyCatch {
    this.dailyCatch = new DailyCatch();
    this.dailyCatch.weather = 'Sunny';

    if (!landed.id) {
      landed.id = (++this.lastId).toString();
    }

    this.dailyCatch.landed.push(landed);
    this.dailyCatch.day = '2017-04-30';
    return this.dailyCatch;
  }

  // Simulate PUT /catches
  updateDailyCatch(landed: Landed): DailyCatch {
    if (!landed.id) {
      landed.id = (++this.lastId).toString();
    }

    this.dailyCatch.landed.push(landed);
    return this.dailyCatch;
  }

  // Upsert of dailyCatch
  landFish(landed: Landed): DataService {
    console.log('landing fish');

    if (!!this.dailyCatch) {
      console.log('updating catch');
      this.updateDailyCatch(landed);
    } else {
      console.log('creating catch');
      this.createDailyCatch(landed);
    }
    console.log(this.dailyCatch);
    return this;
  }

  // Fetch of todays dailyCatch
  getDailyCatch(): DailyCatch {
    return this.dailyCatch;
  }

  // Simulate DELETE /landed/:id
  deleteLandedById(id: string): DataService {
    this.dailyCatch.landed = this.dailyCatch.landed
      .filter(landed => landed.id !== id);
    return this;
  }

  // Simulate GET /landed/:id
  getLandedById(id: string): Landed {
    return this.dailyCatch.landed
      .filter(landed => landed.id === id)
      .pop();
  }

  // Simulate PUT /landed/:id
  updateLandedById(id: string, values: Object = {}): Landed {
    let landed = this.getLandedById(id);
    if (!landed) {
      return null;
    }
    Object.assign(landed, values);
    return landed;
  }

  // Toggle landed sold
  toggleLandedSold(landed: Landed) {
    let updatedLanded = this.updateLandedById(landed.id, {
      sold: !landed.sold
    });
    return updatedLanded;
  }

}
