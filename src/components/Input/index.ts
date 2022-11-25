import Block from '../../utils/Block';
import template from './input.hbs';

interface InputProps {
  class?:string;
  type: string;
  name:string;
  id?:string;
  placeholder?:string
  errorText?:string
  label?:string
  events?: {
    onchange?: () => void;
  };
}

export class Input extends Block {
  constructor(props: InputProps) {
    super(props);
  }

  render() {
    return this.compile(template, {...this.props});
  }
}
