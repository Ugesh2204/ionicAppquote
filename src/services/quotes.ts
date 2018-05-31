import { Quote } from "../data/quotes.interface";

export class QuotesService {
    private favoriteQuotes: Quote[] = [];

    addQuoteToFavorites(quote: Quote) {
        this.favoriteQuotes.push(quote);
        console.log(this.favoriteQuotes);
    }

    removeQuoteFromFavorites(quote: Quote) {
        const position = this.favoriteQuotes.findIndex((quoteEl: Quote) => {
            return quoteEl.id == quote.id
        });
        /**Remove element from my array */
        this.favoriteQuotes.splice(position, 1);
    }

    /**Slice will copy the array  */
    getFavoriteQuotes() {
        return this.favoriteQuotes.slice();
    }
}

/**Need to ptovide this server go to app module */
/**Go to provide it to quotes.ts file */