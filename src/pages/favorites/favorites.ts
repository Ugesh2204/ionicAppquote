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
  const modal = this.modalCtrl.create(QuotePage, quote);
  modal.present();
  /**life cycle hook */
  modal.onDidDismiss( (remove: boolean) => {
    if(remove) {
      this.quotesService.removeQuoteFromFavorites(quote);
      //this.quotes = this.quotesService.getFavoriteQuotes();
      /**second method */
      const position = this.quotes.findIndex((quoteEl: Quote) =>{
        return quoteEl.id == quote.id;
      });
      this.quotes.splice(position, 1);
    }
    
  });
 }

}
