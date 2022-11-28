import Block from '../../utils/Block'
import template from './profile.hbs'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Card } from '../../components/Card'

interface LoginProps {
  title: string
}

export class Profile extends Block {
  constructor(props:any) {
    super(props)
    
  }

  render() {
    return this.compile(template, {...this.props})
  }
}
