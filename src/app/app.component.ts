import {AfterViewInit, Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle') appTitle;

  ngAfterViewInit() {
    this.appTitle.nativeElement.textContent = 'shop';
  }

}
