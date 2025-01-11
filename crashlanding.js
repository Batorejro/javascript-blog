/* eslint-disable indent */
function generateTitleLinks(customSelector = '') {

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

        html = html + linkHtml;
        const links = document.querySelectorAll('.titles a');

        for (let link of links) {
            link.addEventListener('click', titleClickHandler);
        }
    }
    // eslint-disable-next-line indent
    titleList.innerHTML = html;
};
generateTitleLinks();
