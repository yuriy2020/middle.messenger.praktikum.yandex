import Block from '../../utils/Block';
import template from './card.hbs';

interface CardProps {
  id?:string;
  class?:string;
  avatar?:string;
  first_name?: string;
  secons_name?:string;
  email?:string
  login?:string
  display_name?:string
  phone?:string
  events?: {
    onchange?: () => void;
  };
}

export class Card extends Block {
  constructor(props: CardProps) {
    super(props);
  }
  protected init(): void {
    
  }
  render() {
    console.log(this.props);
    return this.compile(template, {...this.props});
  }
}
