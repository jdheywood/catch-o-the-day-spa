import {Component, OnInit} from '@angular/core';
import {DataService} from './data.service';
import {Fish} from './fish';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent implements OnInit {

  constructor(private dataService: DataService) {}

  fish: Fish[];

  ngOnInit(){
    this.dataService
      .getFish()
      .subscribe(data => this.fish = data)
  }

  get dailyCatches() {
    return this.dataService.getDailyCatch();
  }

  onAddLanded(landed) {
    console.log('emitted event landFish caught');
    this.dataService.landFish(landed);
  }

  onToggleLandedSold(landed) {
    console.log('emitted event toggleLandedSold caught');
    this.dataService.toggleLandedSold(landed);
  }

  onRemoveLanded(landed) {
    this.dataService.deleteLandedById(landed.id);
  }

}
