import { Chat } from './pages/Chat'
import { Login } from './pages/Login'
import { Button } from './components/Button'
import { renderDOM } from './utils/renderDOM'

window.addEventListener('DOMContentLoaded', () => {
  // const root = document.querySelector('#app')!

  // const chat = new Chat({ title: 'Home page' });
  const login = new Login()

  renderDOM('#app', login)

})

// eslint-disable-next-line
function switchMenu(cls: string): void {
  const toggleElements = ['page_login', 'page_register', 'page_chat', 'page_profile']
  const visible = document.querySelector(`.page${cls}`)
  if (!visible) {
    return
  }

  if (!visible.classList.contains('on')) {
    visible.classList.remove('off')
    visible.classList.add('on')
  }
  toggleElements.forEach((elem) => {
    if (!elem.includes(cls)) {
      const nonvisible = document.querySelector(`.${elem}`)
      if (!nonvisible) {
        return
      }
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
