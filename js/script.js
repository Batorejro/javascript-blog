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





const optArticleSelector = '.post', optTitleSelector = '.post-title', optTitleListSelector = '.titles', optArticleTagSelector = '.post-tags.list';

function generateTitleLinks(customSelector = '') {
  const titleList = document.querySelector(optTitleListSelector);

  if (!titleList) {
    console.error('Error: Title list element not found!', optTitleListSelector);
    return; // Exit early if title list container not found
  }

  titleList.innerHTML = '';

  let html = '';
  const articles = document.querySelectorAll(optArticleSelector + customSelector);

  for (let article of articles) {
    const articleId = article.getAttribute('id');
    const articleTitleElement = article.querySelector(optTitleSelector);

    if (!articleTitleElement) {
      console.warn(`Warning: No title element found within article with id: ${articleId}. Skipping.`);
      continue; // Skip to next article if the title is not found
    }
    const articleTitle = articleTitleElement.innerHTML;


    /* create HTML of the link */
    const linkHtml = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    /* insert link into titleList */

    html = html + linkHtml;
  }

  titleList.innerHTML = html;

  const links = document.querySelectorAll('.titles a');

  for (let link of links) {
    link.addEventListener('click', titleClickHandler);
  }

}

// In your main code when the script loads
generateTitleLinks();

// And now function for tags generation

function generateTags() {
  /* find all articles */
  const articles = document.querySelectorAll(optArticleTagSelector);

  /* START LOOP: for every article: */
  for (let article of articles) {
    /* find tags wrapper */
    const tagsWrapper = article.querySelector(optArticleTagSelector);

    /* make html variable with empty string*/
    let html = '';

    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
    /* START LOOP: for each tag */

    for (let tags of articleTagsArray) {
      /* generate HTML of the link */
      const linkHtml1 = '<li><a href="#' + articles + '"><span>' + articleTags + '</span></a></li>';
      /* add generated code to html variable */


      html = html + linkHtml1;
      /* end loop:for each tag */
    }
    /* insert HTML of all the links into the tags wrapper */
    tagsWrapper.insertAdjacentHTML('beforeend', linkHtml1);

    /*end loop for every article*/
  }
}
generateTags();

