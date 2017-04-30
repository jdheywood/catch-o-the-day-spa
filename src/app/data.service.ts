import {Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Fish} from './fish';
import {Landed} from './landed';
import {DailyCatch} from "./daily-catch";

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {

  // Resolve HTTP using the constructor
  constructor(private http: Http) {}

  // private instance variables to hold url & paths of our api
  private apiRootUrl = 'http://localhost:3030/api';
  private apiPathFish = '/fish';
  private apiPathCatch = '/catch';

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId: number = 0;

  // Placeholders for actual data

  // types of fish the app supports, populate via code initially then wire up to API
  catfish: Fish = {id: '1', name: 'Catfish'};
  pike: Fish = {id: '2', name: 'Pike'};
  trout: Fish = {id: '3', name: 'Trout'};
  fish: Fish[] = [this.catfish, this.pike, this.trout];

  // Daily catch
  dailyCatch: DailyCatch;

  // Landed fish
  landed: Landed[] = [];

  // Simulate GET /fish
  getFish(): Observable<Fish[]> {
    // return this.fish;

    return this.http.get(`${this.apiRootUrl}${this.apiPathFish}`)
      .map((res:Response) => res.json());
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

    if (!landed.fish) {
      landed.fish = this.fish[0].name;
    }

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
