import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';




@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {

  /**View controller control the active view  */
  constructor (private viewCtrl: ViewController) {

  }
  onclose() {
    this.viewCtrl.dismiss();
  }



}
