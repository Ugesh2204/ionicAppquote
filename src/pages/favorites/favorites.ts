import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

import { Quote } from "../../data/quotes.interface";
import { QuotesService } from "../../services/quotes";
import { QuotePage } from "../quote/quote";
import { SettingsService } from '../../services/settings';



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
              private modalCtrl: ModalController,
              private settingsService: SettingsService,
            ) {}

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
      //this.quotes = this.quotesService.getFavoriteQuotes();
      /**second method */
      this.onRemoveFromFavorites(quote);
      
    }
    
  });
 }

 onRemoveFromFavorites(quote: Quote){

  this.quotesService.removeQuoteFromFavorites(quote);
      const position = this.quotes.findIndex((quoteEl: Quote) =>{
        return quoteEl.id == quote.id;
      });
      this.quotes.splice(position, 1);

 }

 /**Implement a helper method */
  getBackground() {
    return this.settingsService.isAltBackground() ? 'altQuoteBackground' : 'quoteBackground';
  }

  isAltBackground(){
    return this.settingsService.isAltBackground();
  }
 
}
