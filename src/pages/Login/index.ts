import Block from '../../utils/Block'
import template from './login.hbs'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

interface LoginProps {
  title: string
}

export class Login extends Block {
  constructor() {
    super()
  }

  protected init(): void {
    this.children.login = new Input({
      class: 'text__field',
      type: 'text',
      name: 'login',
      id: 'login',
      placeholder: 'Login',
      errorText: 'неверный логин',
      label: 'Логин',
    })

    this.children.password = new Input({
      class: 'text__field',
      type: 'text',
      name: 'password',
      id: 'password',
      label: 'Пароль',
      placeholder: 'password',
    })

    this.children.button = new Button({
      label: 'Войти',
      class: 'btn btn__primary',
      events:{
        click:()=>{console.log('ok');
        }
      }
    })
  }

  render() {
    return this.compile(template)
  }
}
