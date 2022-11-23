import Block from '../../utils/Block';
import template from './login.hbs';
import { Button } from '../../components/Button';

interface LoginProps {
  title: string;
}

export class Login extends Block {
  constructor(props: LoginProps) {
    super('div', props);
  }

  init() {
    this.children.button = new Button({
      label: 'Click me',
      events: {
        click: () => console.log('clicked'),
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
