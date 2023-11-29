// script.js
// Copy the following data structure to the top of script.js:
var menuLinks = [
  { text: 'about', href: '/about' },
  { text: 'catalog', href: '/catalog' },
  { text: 'orders', href: '/orders' },
  { text: 'account', href: '/account' },
];

const mainEl = document.querySelector('main')

mainEl.style.backgroundColor = 'var(--main-bg'

const head1 = document.createElement('h1')
head1.textContent = 'SEI Rocks!'
mainEl.appendChild(head1)


mainEl.setAttribute('class', 'flex-ctr')

const topMenuEl = document.getElementById('top-menu')

topMenuEl.style.height = '100%'

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'

topMenuEl.className = 'flex-around'

for (let i = 0; i < menuLinks.length; i++) {
  
  const element_a = document.createElement('a')

  
  element_a.setAttribute('href', menuLinks[i].href)

    element_a.textContent = menuLinks[i].text

  
  topMenuEl.appendChild(element_a)
}