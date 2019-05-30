'use strict';

class Article {
    constructor(title, author, text) {
        this.title = title;
        this.author = author;
        this.text = text;
    }

    mathes(query) {
        if(this.title.includes(query) || this.author.includes(query) || this.text.includes(query)) {
          return true;
        } else {
          return false;
        }
    }
}
