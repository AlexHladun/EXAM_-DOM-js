class ArticleList {
    constructor(container) {
        container = document.querySelector('#container');
        this.arrArticle = [];
    }

    addArticle(article) {
        this.arrArticle.push(article);
      console.log(this.arrArticle)
    }

    removeArticle(article) {
        for(let item of this.arrArticle) {
          for (let [key,value] of Object.entries(item)) {
              this.arrArticle.map(() => {
                return (!value in item)
               })
             }
           }
     }
}
