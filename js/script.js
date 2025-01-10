'use strict';


function titleClickHandler() {
  //event.preventDefault();
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



const optArticleSelector = '.post', optTitleSelector = '.post-title', optTitleListSelector = '.titles';

/* remove contents of titleList 
const opts = {
  tagSizes: {
    count: 5,
    classPrefix: 'tag-size-',
  },
};
*/

const generateTitleLinks = function (customSelector = '') {

  /* remove contents of titleList*/
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';

  /* for each article */
  let html = '';
  const articles = document.querySelectorAll(optArticleSelector + customSelector);
  for (let article of articles) {

    /* get the article id */
    const articleId = article.getAttribute('id');

    /* find the title element and get the title from the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    /* create HTML of the link */
    const linkHtml = { id: articleId, title: articleTitle };


    /* insert link into titleList */
    //titleList.insertAdjacentHTML('beforeend', linkHtml);
    html = html + linkHtml;
  }
  titleList.innerHTML = html;
};
generateTitleLinks();



