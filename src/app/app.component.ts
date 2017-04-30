import {Component} from '@angular/core';
import {DataService} from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent {

  constructor(
    private dataService: DataService
  ) {
  }

  get fish() {
    return this.dataService.getFish();
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
