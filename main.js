'use strict';
document.addEventListener('DOMContentLoaded', () => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://my-json-server.typicode.com/mate-academy/literary-blog/articles');
  xhr.responseType = 'json';
  xhr.addEventListener('load', () => {
    const container = document.querySelector('#article-list');
    const articleList = new ArticleList(container);
    for (const item of xhr.response) {
      const article = new Article(item.title, item.author, item.text);
      articleList.addArticle(article);
    }
    articleList.render();
    document.querySelector('input').addEventListener('input', function() {
      articleList.render(this.value.trim());
    })
  })
  xhr.send();
});