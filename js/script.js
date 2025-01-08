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
  console.log(selectedArticle)

  /* add class 'active' to the correct article */
  selectedArticle.classList.add('active');
}

const links = document.querySelectorAll('.titles a');

for (let link of links) {
  link.addEventListener('click', titleClickHandler);
}
////////////////////////////////////////////////////////////////




function tagClickHandler(event) {
  const tagClicked = this;
  console.log("Tag Clicked: " + tagClicked)


  const actLinks = document.querySelectorAll('.tags a');

  for (let link of actLinks) {
    console.log(link);
  }

  tagClicked.classList.add('active');

  /* [DONE] remove class 'active' from all articles */

  const activeTags = document.querySelectorAll('.post.active');
  for (let activeLiTag of activeTags) {
    activeTags.classList.remove('active');
  }

  /* get 'href' attribute from the clicked link */
  const hreft = tagClicked.getAttribute('href');

  /* find the correct article using the selector (value of 'href' attribute) */
  const selectedTag = document.querySelector(hreft);
  console.log(selectedTag)

  /* add class 'active' to the correct article */
  selectedTag.classList.add('active');
}

const linksTag = document.querySelectorAll('.tags a');

for (let link of linksTag) {
  link.addEventListener('click', tagClickHandler);
}