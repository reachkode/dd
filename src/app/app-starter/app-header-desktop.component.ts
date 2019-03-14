
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';




@Component({
    moduleId: module.id.toString(),
    selector: 'app-header-desktop',
    templateUrl: './app-header-desktop.component.html'
})
//CR1287 Sprint 25| Angular Upgrade  
export class HeaderDesktopComponent {
    provider: any = {};
    recipient: any = {};
    retryCount: number = 0;
    usertype: any;
    loginuserinfo: any = {};
    isProviderActive: boolean = false;
    isRecipientActive: boolean = false;
    USER_TYPE_PROVIDER: string = 'provider';
    USER_TYPE_RECIPIENT: string = 'recipient';

    isLoggedIn$: Observable<boolean>;
    isProviderLoggedIn$: Observable<boolean>;
    isRecipientLoggedIn$: Observable<boolean>;
    constructor() {        
        if (this.isLoggedIn$) {
        }


    }


}