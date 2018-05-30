import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Quote } from "../../data/quotes.interface";



@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
/**Retriving Data */
 quoteGroup: {category: string, quotes: Quote[], icon: string};
 
 constructor(private navParams:NavParams){}

 ngOnInit(){
   this.quoteGroup = this.navParams.data; 
  }





 /**page lifecycle hook method */
//ionViewDidLoad() {
 // this.quoteGroup = this.navParams.data;
 // Add elvis operator (?) in template to use this approach
//}


}
