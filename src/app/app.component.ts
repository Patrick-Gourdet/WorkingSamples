import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PortfolioApplication'; hasLoaded: boolean = false;
  @Output() finishedLoading: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngAfterViewChecked() {
     // TODO event emmiter to change the chart settings
     this.finishedLoading.emit(true);
  }
 
}
