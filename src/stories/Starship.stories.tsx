/* eslint-disable react/react-in-jsx-scope */
import { StarshipElement } from '../components/StarshipElement'

export default {
  component: StarshipElement,
  title: 'Starships/StarshipElement',
  args: {
    name: 'STAR DESTROYER',
    model: 'Imperial I-class Star Destroyer'
  }
}
const Template = args => <StarshipElement {...args} />

export const Default = Template.bind({})