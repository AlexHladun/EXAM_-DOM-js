class ArticleList {
  constructor(container) {
      this.container = container;
      this.arrArticles = [];
  }

  addArticle(article) {
      this.arrArticles.push(article);
  }

  removeArticle(article) {
      this.arrArticles.splice(this.arrArticles.indexOf(article),1);
  }

  render(query = '') {
    this.container.innerHTML = "";
    for (let item of this.arrArticles) {

      if(query !== '' && !item.matches(query)) {
        continue;
      }
      if(localStorage.getItem(item.title)) {
        continue;
      }
      const articleContainer = document.createElement('articleContainer');
      articleContainer.insertAdjacentHTML('beforeend', `
      <article>
        <h2>${item.title} <button>X</button></h2>
        <p>${item.author}</p>
        <p>${item.text}</p>
      </article>
    `);
    this.container.append(articleContainer);
    articleContainer.querySelector('button').addEventListener('click', () => {
      localStorage.setItem(item.title, '1');
      this.removeArticle(item);
      this.render(query);
    })
    }
  }
}