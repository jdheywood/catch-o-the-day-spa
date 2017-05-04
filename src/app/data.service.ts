import {Injectable} from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Fish} from './fish';
import {Landed} from './landed';
import {DailyCatch} from "./daily-catch";
import * as moment from 'moment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {

  // Resolve HTTP using the constructor
  constructor(private http: Http) {}

  // private instance variables to hold url & paths of our api
  // 'https://catch-o-the-day.herokuapp.com/api';
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

  private defaultLanded(landed) {
    if (!landed.fish) {
      landed.fish = 'Catfish';
    }
    if (!landed.weight) {
      landed.weight = '5kg';
    }
    return landed;
  }

  // GET - Fetch the types of fish we support in our app
  getFish(): Observable<Fish[]> {
    return this.http.get(`${this.apiRootUrl}${this.apiPathFish}`)
      .map((res:Response) => res.json());
  }

  // GET - Fetch today's dailyCatch
  getDailyCatch(): Observable<DailyCatch> {
    return this.http.get(`${this.apiRootUrl}${this.apiPathCatch}/${this.day}`)
      .map((res:Response) => res.json());
  }

  // PUT - 'Upsert' of landed value on current dailyCatch
  landFish(landed: Landed): Observable<DailyCatch> {
    // TODO add form validation to the header component to force selection of fish and entry of (valid?) weight on submit
    landed = this.defaultLanded(landed);

    return this.http.put(`${this.apiRootUrl}${this.apiPathCatch}/${this.day}${this.apiPathLanded}`,
      landed, {headers: this.getHeaders()})
      .map((res:Response) => res.json());
  }

  // PUT - Toggle landed sold property of specific landed on current dailyCatch
  toggleLandedSold(landed: Landed): Observable<DailyCatch> {
    return this.http.put(`${this.apiRootUrl}${this.apiPathCatch}/${this.day}${this.apiPathLanded}/${landed._id}`,
      {}, {headers: this.getHeaders()})
      .map((res:Response) => res.json());
  }

  // DELETE - Remove landed by identifier from current dailyCatch
  deleteLandedById(id: string): Observable<DailyCatch> {
    return this.http.delete(`${this.apiRootUrl}${this.apiPathCatch}/${this.day}${this.apiPathLanded}/${id}`,
      {headers: this.getHeaders()})
      .map((res:Response) => res.json());
  }

}
