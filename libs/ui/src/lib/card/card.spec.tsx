import { render } from '@testing-library/react';

import Card from './card';

describe('Card', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Card data={{
      statSubtitle:"Traffic",
      statTitle: "350,897",
      statArrow: "up",
      statPercent: "3.48",
      statPercentColor: "text-emerald-500",
      statDescripiron: "Since last month",
      statIconName: "far fa-chart-bar",
      statIconColor: "bg-green-500",
    }}/>);
    expect(baseElement).toBeTruthy();
    expect(baseElement).toMatchSnapshot();
  });
});
