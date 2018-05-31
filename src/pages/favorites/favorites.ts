import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { Quote } from "../../data/quotes.interface";
import { QuotesService } from "../../services/quotes";
import { QuotePage } from "../quote/quote";



@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
/**Getting the favorite quote 
 * we need from our quote service
*/
quotes: Quote[];
 constructor (private quotesService: QuotesService,
              private modalCtrl: ModalController) {}

 ionViewWillEnter() {
   this.quotes = this.quotesService.getFavoriteQuotes();
 }

/**Display model  */
 onViewQuote(quote: Quote) {
   /**Notice the create method */
  const modal = this.modalCtrl.create(QuotePage);
  modal.present();
 }

}
