import { Chat } from './pages/Chat'
import { Button } from './components/Button'
import { renderDOM } from './utils/renderDOM'
import { Login } from './pages/Login'
import { Registry } from './pages/Registry'
import { Profile } from './pages/Profile'

window.addEventListener('DOMContentLoaded', () => {

  // const registry = new Registry()
  // const login = new Login()
  
  const profile = new Profile({
    id: '636b690ecece9e21f97a035f',
    avatar: '/static/img/ava.png',
    first_name: 'Silva',
    secons_name: 'Morris',
    email: 'silvamorris@steeltab.com',
    login: 'Cabrera',
    display_name: 'Chupakabra',
    phone: '+7(909)9673030',
    class:'profile__data'
  })

  renderDOM('#app', profile)

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
