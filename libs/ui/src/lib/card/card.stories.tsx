import { Story, Meta } from '@storybook/react';
import { Card } from './card';

export default {
  component: Card,
  title: 'Card',
} as Meta;

const Template: Story = (args) => <Card data={{
  statSubtitle:"Traffic",
  statTitle: "350,897",
  statArrow: "up",
  statPercent: "3.48",
  statPercentColor: "text-emerald-500",
  statDescripiron: "Since last month",
  statIconName: "far fa-chart-bar",
  statIconColor: "bg-green-500",
}} />;

export const Primary = Template.bind({});
Primary.args = {};
