import Block from '../../utils/Block'
import template from './login.hbs'
import { Button } from '../../components/Button'

interface LoginProps {
  title: string
}

export class Login extends Block {
  constructor() {
    super()  
  }

   protected init(): void {
    this.children.button = new Button({label:"text", class:'btn'})
   }
  render() {
    

    return this.compile(template)
  }
}
