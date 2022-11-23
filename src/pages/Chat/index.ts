import Block from '../../utils/Block';
import template from './chat.hbs';
import { Button } from '../../components/Button';


interface ChatProps {
  title: string;
}

export class Chat extends Block {
  constructor(props: ChatProps) {
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
