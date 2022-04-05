import { Story, Meta } from '@storybook/react';
import { App } from './app';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
  component: App,
  title: 'App'
} as Meta;

const Template: Story = (args) => <App {...args} />;

export const Primary = Template.bind({});
Primary.args = {};


export const Refresh = Template.bind({});
Refresh.args = {
};
Refresh.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.click(canvas.getByText('Refresh'));
  await expect(canvas.getAllByText('100').length).toBe(4);
}
