import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';




@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {

  person: string;
  text: string;

  /**View controller control the active view  */
  constructor (private viewCtrl: ViewController,
                private navParams: NavParams) {
  }

  /**So when the page was create */
  ionViewDidLoad() {
    this.person = this.navParams.get('person');
    this.text = this.navParams.get('text');
  }

  /**Retive the data from favorite */
  onclose(remove = false) {
    /**Passing the remove to favorite  true or false*/
    this.viewCtrl.dismiss(remove);
  }



}
