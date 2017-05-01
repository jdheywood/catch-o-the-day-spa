import {Component, OnInit, OnChanges} from '@angular/core';
import {DataService} from './data.service';
import {Fish} from './fish';
import {DailyCatch} from "./daily-catch";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent implements OnInit, OnChanges {

  constructor(private dataService: DataService) {}

  fish: Fish[];
  dailyCatch: DailyCatch;

  ngOnInit(){
    this.dataService
      .getFish()
      .subscribe(data => this.fish = data);

    this.dataService
      .getDailyCatch()
      .subscribe(data => this.dailyCatch = data);
  }

  ngOnChanges(){
    this.dataService
      .getDailyCatch()
      .subscribe(data => this.dailyCatch = data);
  }

  onAddLanded(landed) {
    this.dataService
      .landFish(landed)
      .subscribe(data => this.dailyCatch = data);
  }

  onToggleLandedSold(landed) {
    this.dataService
      .toggleLandedSold(landed)
      .subscribe(data => this.dailyCatch = data);
  }

  onRemoveLanded(landed) {
    this.dataService
      .deleteLandedById(landed._id)
      .subscribe(data => this.dailyCatch = data);
  }

}
