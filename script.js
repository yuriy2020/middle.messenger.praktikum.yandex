const toggleElements = ['nav_login', 'nav_register', 'nav_chat', 'nav_profile']
// console.log(document);
function switchMenu(cls) {
  const visible = document.querySelector(`.nav${cls}`)

  if (!visible.classList.contains('on')) {
    visible.classList.remove('off')
    visible.classList.add('on')
  }
  toggleElements.forEach((elem) => {
    if (!elem.includes(cls)) {
      const nonvisible = document.querySelector(`.${elem}`)
      nonvisible.classList.remove('on')
      nonvisible.classList.add('off')
    }
  })
}

const forms = document.querySelectorAll('form')
forms.forEach((f) => {
  f.addEventListener('submit', function (e) {
    e.preventDefault()
    console.log(e.target)
  })
})

