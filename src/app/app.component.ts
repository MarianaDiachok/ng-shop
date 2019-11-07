import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle') appTitle;

  navLinks = [
    {
      path: 'home',
      label: 'Products'
    },
    {
      path: 'cart',
      label: 'Cart'
    },
  ];

  ngAfterViewInit() {
    // this.appTitle.nativeElement.textContent = 'shop';
  }
  onActivate($event: any, routerOutlet: RouterOutlet) {
    console.log('Activated Component', $event, routerOutlet);
  }

  onDeactivate($event: any, routerOutlet: RouterOutlet) {
    console.log('Deactivated Component', $event, routerOutlet);
  }

}
