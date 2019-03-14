/**
 * Copyright 2017 Hewlett Packard Enterprise
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), 
 * to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, 
 * and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * 
 */

/**
 * The class is used to maintain the Bluemix environment related configuration items
 * 
 */
export class ConfigItems {
	public static servicesURL : string = "https://etsServicesDev.mybluemix.net";
	public static environmentID : string = "DEV"  // DEV,PROD Should go here.
	public static hduURL : string = "https://cap-sg-prd-1.integration.ibmcloud.com:16289/hdu/rest/ticket-with-attachment"  // This is the FUN HDU url.
	//public static hduURL:string = "https://cap-sg-prd-4.integration.ibmcloud.com:16627/hdu/rest/ticket-with-attachment"  // This is the PROD HDU url.
	public static webAppURL : string = "https://etsWebAppDev.mybluemix.net"; //web application URL goes here
	public static ticketRequestType : any = {
		SUBMIT_FILE_SIZE : 5000000,
		DEV_RTYP01 : "pcat:400104",
		DEV_RTYP02 : "pcat:400027",
		DEV_RTYP03 : "pcat:400101",
		DEV_RTYP04 : "pcat:400027",
		PROD_RTYP01 : "pcat:400053",
		PROD_RTYP02 : "pcat:400049",
		PROD_RTYP03 : "pcat:400050",
		PROD_RTYP04 : "pcat:400049"
	}	
} 
