const toggleElements = ['nav_login', 'nav_register', 'nav_chat', 'nav_profile']

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

