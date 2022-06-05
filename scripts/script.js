let peopleWrapperCollection = document.querySelectorAll('.personWrapper > article > span');

peopleWrapperCollection.forEach(element => {
    element.style.position = 'absolute';
    element.style.height = element.previousElementSibling.clientHeight + 'px';
});
