'use strict';

function titleClickHandler(event) {
  const clickedElement = this;
  console.log('Link was clicked!');

  /* [DONE] remove class 'active' from all article links  */

  const activeLinks = document.querySelectorAll('.titles a.active');

  for (let activeLink of activeLinks) {
    activeLink.classList.remove('active');
  }

  /* [IN PROGRESS] add class 'active' to the clicked link */
  clickedElement.classList.add('active');

  /* [DONE] remove class 'active' from all articles */

  const activeArticles = document.querySelectorAll('.post.active');
  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove('active');
  }

  /* get 'href' attribute from the clicked link */

  const href = clickedElement.getAttribute('href');

  /* find the correct article using the selector (value of 'href' attribute) */
  const selectedArticle = document.querySelector(href);
  console.log(selectedArticle);

  /* add class 'active' to the correct article */
  selectedArticle.classList.add('active');
}

const links = document.querySelectorAll('.titles a');

for (let link of links) {
  link.addEventListener('click', titleClickHandler);
}
////////////////////////////////////////////////////////////////

// ta funkcję trzeba naprawić;(( - bo nie chce działać
/*

function tagClickHandler(event) {
  const tagClicked = this;
  console.log("Tag Clicked: " + tagClicked)


  const actLinks = document.querySelectorAll('.tags a');

  for (let link of actLinks) {
    console.log(link);
  }

  tagClicked.classList.add('active');

  const activeTags = document.querySelectorAll('.post.active');
  for (let activeLiTag of activeTags) {
    activeTags.classList.remove('active');
  }
  const hreft = tagClicked.getAttribute('href');
  const selectedTag = document.querySelector(hreft);
  console.log(selectedTag)

  selectedTag.classList.add('active');
}

const linksTag = document.querySelectorAll('.tags a');

for (let link of linksTag) {
  link.addEventListener('click', tagClickHandler);
}
*/

//usuwanie zawartości listy linków

//optTitleSelector = '.post-title',



const optTitleSelector = '.post-title';
let optTitleListSelector = '.titles';
const articles = document.querySelectorAll(optArticleSelector);

/* remove contents of titleList */

function generateTitleLinks() {
  const titleList = document.querySelector(optTitleListSelector);
  clearMessages();
  /* generate links */
  const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
  //const html = generateTitleLinksHTML();
  /* insert links into titleList */
  titleList.innerHTML = titleList.innerHTML + linkHTML;
}


function clearMessages() {
  document.getElementById('messages').innerHTML = '';
  document.getElementById('messages').classList.remove('messages');


}
/* for each article */
const optArticleSelector = document.querySelectorAll('.post.active');
for (let optArticleSelector of optTitleSelector) {
  optArticleSelector.classList.remove('messages');
  let html = '';

  /* get the article id */
  for (let article of articles) {
    const articleId = article.getAttribute('id');
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    html += '<li><a href="#' + articleId + '">' + articleTitle + '</a></li>';
  }
  console.log(html);
}

generateTitleLinks();




