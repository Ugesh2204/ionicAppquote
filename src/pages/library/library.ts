import { Component, OnInit } from '@angular/core';
import { Quote } from "../../data/quotes.interface";

import  quotes  from "../../data/quotes";



@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {
/**Importing the quotes */
quoteCollection: {category: string, quotes: Quote[], icon: string} [];

ngOnInit(){
  this.quoteCollection = quotes;
}
}
