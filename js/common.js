const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
    searchInputEl.focus();
}); //seacrchEl 을 클릭하면 input요소에 강제 focus를 적용

searchInputEl.addEventListener('focus', function () {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
}); //포커스가 되면 .setAttribute => HTML 속성을 지정해라

searchInputEl.addEventListener('blur', function () {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
}); //포커스가 빠지면



const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 2021