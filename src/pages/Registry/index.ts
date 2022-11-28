import Block from '../../utils/Block'
import template from './registry.hbs'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

interface LoginProps {
  title: string
}

export class Registry extends Block {
  constructor() {
    super()
  }

  protected init(): void {
    this.children.mail = new Input({
      class: 'text__field',
      type: 'text',
      name: 'mail',
      id: 'mail',
      placeholder: 'example@mail.ru',
      value: '1',
      errorText: '',
      label: 'Почта',
    })

    this.children.login = new Input({
      class: 'text__field',
      type: 'text',
      name: 'login',
      id: 'login',
      placeholder: '',
      value: '2',
      errorText: '',
      label: 'Логин',
    })

    this.children.user_name = new Input({
      class: 'text__field',
      type: 'text',
      name: 'user_name',
      id: 'user_name',
      placeholder: '',
      value: '3',
      errorText: '',
      label: 'Имя',
    })

    this.children.user_family = new Input({
      class: 'text__field',
      type: 'text',
      name: 'user_family',
      id: 'user_family',
      placeholder: '',
      value: '4',
      errorText: '',
      label: 'Фамилия',
    })

    this.children.phone = new Input({
      class: 'text__field',
      type: 'text',
      name: 'phone',
      id: 'phone',
      placeholder: '',
      value: '5',
      errorText: '',
      label: 'Телефон',
    })

    this.children.user_pass_1 = new Input({
      class: 'text__field',
      type: 'password',
      name: 'user_pass_1',
      id: 'user_pass_1',
      placeholder: '',
      // value: "6",
      errorText: 'Неверный пароль',
      label: 'Пароль',
    })

    this.children.user_pass_2 = new Input({
      class: 'text__field',
      type: 'password',
      name: 'user_pass_2',
      id: 'user_pass_2',
      placeholder: '',
      // value: "7",
      errorText: 'Неверный пароль',
      label: 'Пароль (еще раз)',
    })

    this.children.sigh_in = new Button({
      label: 'Регистрация',
      class: 'btn btn__primary',
      events: {
        click: () => {
          console.log('ok')
        },
      },
    })
    this.children.cancel = new Button({
      label: 'Отмена',
      class: 'btn btn__danger',
      events: {
        click: () => {
          console.log('ok')
        },
      },
    })
  }

  render() {
    return this.compile(template)
  }
}
