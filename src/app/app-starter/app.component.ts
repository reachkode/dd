import { Component, HostListener } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-root',

  template: `
<app-header-desktop *ngIf="isDesktop"></app-header-desktop>
<router-outlet *ngIf="isDesktop"></router-outlet>
<app-header-handheld *ngIf="isHandheld"></app-header-handheld>
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private isHandheld: boolean = false;
  private isDesktop: boolean = true;
  constructor(private deviceService: DeviceDetectorService) {
    this.onResize();

  }
  // CR1287|Sprint 25|Angular Upgrade| 
  //Check for Desktop or Mobile based upon Screen Size
  @HostListener('window:resize', ['$event'])
  onResize(event?) {

    if (this.isHandheld && window.innerWidth > 1024) {
       window.location.reload();
      if (this.deviceService.browser == "firefox") {
        window.location.href = window.location.href;
      }
    }

    if (window.innerWidth <= 1024) {
      this.isHandheld = true;
      this.isDesktop = false;
    }
    else if (window.innerWidth > 1024) {
      this.isDesktop = true;
      this.isHandheld = false;
    }

  }

}
