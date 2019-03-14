import { Component, ElementRef, ViewChild } from '@angular/core';

import { Observable } from 'rxjs';

// import { NavItemProv } from '../provider/menu/nav-prov-items';
// import { NavItemRecp } from '../recipient/menu/nav-recp-items';

import { Injectable } from '@angular/core';


@Component({
  selector: 'app-header-handheld',
  templateUrl: './app-header-handheld.component.html',
  styleUrls: ['./app-header-handheld.component.css']
})
@Injectable()
export class HeaderHandheldComponent {

  logout: any;
  // navItemsRecp: NavItemRecp[];
  disableClass: boolean;
  isLoggedIn$: Observable<boolean>;
  isProviderLoggedIn$: Observable<boolean>;
  isRecipientLoggedIn$: Observable<boolean>;
  @ViewChild('sidenav') sidenav: ElementRef;
  menu_text: any;
  recipient: any = {};
  retryCount: number = 0;
  menu_recip_ts_history = "";
  menu_recip_prov_ts: string = "";
  menu_recip_stop_ts: string = "";
  menu_recip_change_pass: string = "";
  menu_recip_logout: string = "";
  logininfo: any = {};
  armenian_Space: string;
  loginUserInfo: any = {};
  usertype: string;
  faq_label: string;
  contact_us_label: string;
  privacy_policy_link: string = "";
  notic_ofcollection: string = "";
  electronic_timesheets: string;
  account: string = "";
  whats_new: string = "";
  training_label: string;
  updateAccntInfoLabel: string = "";
  private userSelectedLanguage: string = "";
  

  // navItemsProv: NavItemProv[] = [

  //   {
  //     displayName: 'Electronic Timesheets',
  //     children: [
  //       {
  //         displayName: 'Timesheet Entry',
  //         route: 'provider-timesheet-optin',
  //         disabled: true
  //       },
  //       {
  //         displayName: 'Request Supplemental Timesheet',
  //         route: 'provider-timesheet-supplemental',
  //         disabled: true
  //       },
  //       {
  //         displayName: 'Timesheet Preference',
  //         route: 'timesheet-preferences',
  //         disabled: true
  //       },
  //       {
  //         displayName: 'Stop Electronic Timesheets',
  //         route: 'optout',
  //         disabled: true
  //       }
  //     ]
  //   },
  //   {
  //     displayName: 'Payments',

  //     children: [
  //       {
  //         displayName: 'Recent Payments',
  //         route: 'provider-recent-payment',
  //         disabled: true
  //       },
  //       {
  //         displayName: 'Payment History',
  //         route: 'provider-timesheet-history',
  //         disabled: true
  //       }
  //     ]
  //   },
  //   {
  //     displayName: 'Direct Deposit',

  //     children: [
  //       {
  //         displayName: 'Direct Deposit Entry',
  //         route: 'direct-deposit',
  //         disabled: true
  //       },
  //       {
  //         displayName: 'Direct Deposit Request',
  //         route: 'pdd-request-details',
  //         disabled: true
  //       },
  //       {
  //         displayName: 'Direct Deposit FAQs',
  //         href: 'http://www.cdss.ca.gov/Portals/9/IHSS/E-Timesheets/Online-Direct-Deposit_Frequently_Asked_Questions.pdf',
  //         disabled: false
  //       }
  //     ]
  //   },
  //   {
  //     displayName: 'Sick Leave Claim',

  //     children: [
  //       {
  //         displayName: 'Sick Leave Claim Entry',
  //         route: 'sick-leave',
  //         disabled: true
  //       },
  //       {
  //         displayName: 'Sick Leave Claim History',
  //         route: 'sickleave-history',
  //         disabled: true
  //       },
  //       {
  //         displayName: 'Sick Leave Claim FAQs',
  //         href: 'http://www.cdss.ca.gov/Portals/9/IHSS/PaidSickLeave/Sick-Leave_Frequently_Asked_Questions.pdf',
  //         disabled: false
  //       }
  //     ]
  //   },
  //   {
  //     displayName: 'Account',

  //     children: [
  //       {
  //         displayName: 'Account Information',
  //         route: 'account-information',
  //         disabled: true
  //       },
  //       {
  //         displayName: 'Privacy Policy',
  //         href: 'http://www.cdss.ca.gov/Privacy-Policy',
  //         disabled: false
  //       },
  //       {
  //         displayName: 'Notice on Collection',
  //         href: 'http://www.cdss.ca.gov/Notice-on-Collection',
  //         disabled: false
  //       }
  //     ]
  //   },
  //   {
  //     displayName: 'Whats New',
  //     route: 'provider-update',
  //     disabled: true
  //   },
  //   {
  //     displayName: 'FAQs',
  //     route: 'faq',
  //     disabled: true
  //   },
  //   {
  //     displayName: 'Training',
  //     route: 'training',
  //     disabled: true
  //   },
  //   {
  //     displayName: 'Contact Us',
  //     route: 'contactus-provider',
  //     disabled: true
  //   },
  //   {
  //     displayName: '',
  //     route: 'provider-home',
  //     disabled: true
  //   }
  // ];





  constructor() {

   
    this.disableClass = false;

    var lang = sessionStorage.getItem("preferredLanguage");
    if (sessionStorage.getItem("preferredLanguage") == null) {
      sessionStorage.setItem("preferredLanguage", "en");
    }

 
    //}


 this.loadRecpNavItems();
    

  }
  
  ngAfterViewInit() {
  }

  loadRecpNavItems(){
    // this.navItemsRecp = [

    //   {
    //     displayName: this.electronic_timesheets,
    //     children: [
    //       {
    //         displayName: this.menu_recip_prov_ts,
    //         route: 'recipient-timesheet',
    //         disabled: true
    //       },
    //       {
    //         displayName: this.menu_recip_stop_ts,
    //         route: 'recipient_optout_all_providers',
    //         disabled: true
    //       }
    //     ]
    //   },
    //   {
    //     displayName: this.account,

    //     children: [
    //       {
    //         displayName: this.updateAccntInfoLabel,
    //         route: 'account-information',
    //         disabled: true
    //       },
    //       {
    //         displayName: this.privacy_policy_link,
    //         href: 'http://www.cdss.ca.gov/Privacy-Policy',
    //         disabled: false
    //       },
    //       {
    //         displayName: this.notic_ofcollection,
    //         href: 'http://www.cdss.ca.gov/Notice-on-Collection',
    //         disabled: false
    //       }
    //     ]
    //   },
    //   {
    //     displayName: this.whats_new,
    //     route: 'recipient-home',
    //     disabled: true
    //   },
    //   {
    //     displayName: this.faq_label,
    //     route: 'faq-recipient',
    //     disabled: true
    //   },
    //   {
    //     displayName: this.training_label,
    //     route: 'training',
    //     disabled: true
    //   },
    //   {
    //     displayName: this.contact_us_label,
    //     route: 'contactus',
    //     disabled: true
    //   },
    //   {
    //     displayName: '',
    //     route: 'recipient-home',
    //     disabled: true
    //   }
    // ];



  }
  
  resetLanguage() {
    this.loadRecpNavItems();
      }
}
