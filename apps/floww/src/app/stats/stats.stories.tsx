import { Story, Meta } from '@storybook/react';
import { Stats, StatsProps } from './stats';

export default {
  component: Stats,
  title: 'Stats',
} as Meta;

const Template: Story<StatsProps> = (args) => <Stats {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
