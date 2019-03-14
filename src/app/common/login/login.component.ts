import { Component, OnInit } from '@angular/core';

declare global {
	interface Document {
		documentMode?: any;
		isCapsOn?: boolean;
		this?: this;
	}
}

@Component({
	selector: 'my-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']	
})

export class LoginComponent {

	usertext:string = "";
	isMobile: boolean = false;
	isAndroid: any = "";

	constructor() {
		this.isAndroid = sessionStorage.getItem("android");
		var mobile = sessionStorage.getItem("mdet");
		if ((mobile != "null")) {
			this.isMobile = true;
			if(this.isAndroid == "true")
			{
				this.usertext = "You are using an Android device";
			}else{
				this.usertext = "You are using an Apple Device";
			}
		}
		else {
			this.usertext = "You are using a Desktop"
		}
	}
	ngOnInit(): void {
	}

}

