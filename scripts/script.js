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

if(isMaxWidthMatches(500)) {
    peopleWrappers.filter((_, index) => index % 2 !== 0).forEach((element) => {
        element.style.marginTop += 50 + 'px';
    });
} else if(isMinWidthMatches(501) && isMaxWidthMatches(768)) {
    for(let i = 1; i < peopleWrappers.length; i += 3) {
        if(i === 1){
            peopleWrappers[1].style.marginTop += 50 + 'px';
        } else {
            peopleWrappers[i].style.marginTop += 100 + 'px';
        }
    }
}
// #endregion