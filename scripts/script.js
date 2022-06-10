// #region peopleWrapperSpans
let peopleWrapperSpans = document.querySelectorAll('.personWrapper > article > span');

peopleWrapperSpans.forEach(element => {
    element.style.position = 'absolute';
    element.style.height = element.previousElementSibling.clientHeight + 'px';
});
// #endregion
