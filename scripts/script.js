// #region peopleWrapperSpans
let peopleWrapperSpans = document.querySelectorAll('.personWrapper > article > span');

peopleWrapperSpans.forEach(element => {
    element.style.position = 'absolute';
    element.style.height = element.previousElementSibling.clientHeight + 'px';
});
// #endregion


// #region peopleWrappers
let peopleWrappers = Array.from(document.querySelectorAll('.personWrapper'));

peopleWrappers.filter((_, index) => index % 2 !== 0).forEach((element) => {
    element.style.marginTop += 50 + 'px'
});
// #endregion