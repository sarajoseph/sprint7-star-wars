/* eslint-disable react/react-in-jsx-scope */
import { NavMenuLink } from '../components/header/NavMenuLink'
import { withRouter } from 'storybook-addon-remix-react-router'

export default {
  component: NavMenuLink,
  title: 'Header/NavMenuLink',
  decorators: [withRouter],
  argTypes: {
    handleClick: {
      action: 'handleClick'
    } 
  }
} 
const Template = args => <NavMenuLink {...args} />

export const Active = Template.bind({})
Active.args = {
  active: true,
  url: '/',
  children: 'Home'
}

export const Inactive = Template.bind({})
Inactive.args = {
  active: false,
  url: '/starships',
  children: 'Starships'
}