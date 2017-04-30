import {Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Fish} from './fish';
import {Landed} from './landed';
import {DailyCatch} from "./daily-catch";
import * as moment from 'moment';

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
  private apiPathCatch = '/catches';
  private apiPathLanded = '/landed';

  private day = moment().format('YYYY-MM-DD');

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

  // Placeholder for last id so we can simulate auto-incrementing of id's
  lastId: number = 0;

  // Placeholders for actual data

  // Daily catch
  dailyCatch: DailyCatch;

  // Landed fish
  landed: Landed[] = [];

  // GET /fish
  getFish(): Observable<Fish[]> {
    return this.http.get(`${this.apiRootUrl}${this.apiPathFish}`)
      .map((res:Response) => res.json());
  }

  // Fetch of todays dailyCatch
  getDailyCatch(): Observable<DailyCatch> {
    return this.http.get(`${this.apiRootUrl}${this.apiPathCatch}/${this.day}`)
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
  landFish(landed: Landed): Observable<DailyCatch> {
    // TODO add form validation to the header component to force selection of fish before submit
    if (!landed.fish) {
      landed.fish = 'Catfish';
    }

    return this.http.put(`${this.apiRootUrl}${this.apiPathCatch}/${this.day}${this.apiPathLanded}`,
      landed, {headers: this.getHeaders()})
      .map((res:Response) => res.json());
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
