/* eslint-disable react/react-in-jsx-scope */
import { StarshipList } from '../components/StarshipList'

export default {
  component: StarshipList,
  title: 'Starships/StarshipList',
  args: {
    name: 'STAR DESTROYER',
    model: 'Imperial I-class Star Destroyer'
  }
} 
const Template = args => <StarshipList {...args} />

export const Default = Template.bind({})