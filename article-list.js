class ArticleList {
  constructor(container) {
      container = document.querySelector('#container');
      this.arrArticle = [];
  }

  addArticle(article) {
      this.arrArticle.push(article);
  }

  removeArticle(article) {
      this.arrArticle.splice(this.arrArticle.indexOf(article),1);
   }
}