import { Story, Meta } from '@storybook/react';
import { MapView, MapProps } from './map';

export default {
  component: MapView,
  title: 'Map',
} as Meta;

const Template: Story<MapProps> = (args) => <MapView {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
