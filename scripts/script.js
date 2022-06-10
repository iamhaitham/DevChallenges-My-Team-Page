// #region peopleWrapperSpans
let peopleWrapperSpans = document.querySelectorAll('.personWrapper > article > span');

peopleWrapperSpans.forEach(element => {
    element.style.position = 'absolute';
    element.style.height = element.previousElementSibling.clientHeight + 'px';
});
// #endregion


// #region media query helper functions
function maxWidthQuery(maxWidth) {
    return window.matchMedia(`(max-width: ${maxWidth}px)`);
}

function isMaxWidthMatches(maxWidth) {
    return maxWidthQuery(maxWidth).matches;
}

function minWidthQuery(minWidth) {
    return window.matchMedia(`(min-width: ${minWidth}px)`);
}

function isMinWidthMatches(minWidth) {
    return minWidthQuery(minWidth).matches;
}
// #endregion
// #region peopleWrappers
let peopleWrappers = Array.from(document.querySelectorAll('.personWrapper'));

peopleWrappers.filter((_, index) => index % 2 !== 0).forEach((element) => {
    element.style.marginTop += 50 + 'px'
});
// #endregion