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
    console.log('emitted event landFish caught');
    this.dataService
      .landFish(landed)
      .subscribe(data => this.dailyCatch = data);
  }

  onToggleLandedSold(landed) {
    console.log('emitted event toggleLandedSold caught');
    this.dataService.toggleLandedSold(landed);
  }

  onRemoveLanded(landed) {
    this.dataService.deleteLandedById(landed.id);
  }

}
