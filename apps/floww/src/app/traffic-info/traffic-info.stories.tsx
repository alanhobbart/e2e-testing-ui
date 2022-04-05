import { Story, Meta } from '@storybook/react';
import { TrafficInfo, TrafficInfoProps } from './traffic-info';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
  component: TrafficInfo,
  title: 'TrafficInfo',
  argTypes: {
    onReload: { action: true },
  }
} as Meta;

const data = {
  data: {
    statSubtitle:"Traffic",
    statTitle: "350,897",
    statArrow: "up",
    statPercent: "3.48",
    statPercentColor: "text-emerald-500",
    statDescription: "Since last month",
    statIconName: "far fa-chart-bar",
    statIconColor: "bg-green-500",
  }
  
};

const Template: Story<TrafficInfoProps> = (args) => <TrafficInfo {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  info: data
};
