import { Story, Meta } from '@storybook/react';
import { CardProps } from '@test/ui';
import { TrafficInfo } from './traffic-info';

export default {
  component: TrafficInfo,
  title: 'TrafficInfo',
} as Meta;

const data = {
  statSubtitle:"Traffic",
  statTitle: "350,897",
  statArrow: "up",
  statPercent: "3.48",
  statPercentColor: "text-emerald-500",
  statDescripiron: "Since last month",
  statIconName: "far fa-chart-bar",
  statIconColor: "bg-green-500",
};

const Template: Story<CardProps> = (args) => <TrafficInfo data={data} />;

const ErrorTemplate: Story<CardProps> = (args) => <TrafficInfo data={{ ...data, statIconColor: 'bg-red-500'}}/>;

export const Primary = Template.bind({});
Primary.args = {};

export const Error = ErrorTemplate.bind({});
Error.args = {};
