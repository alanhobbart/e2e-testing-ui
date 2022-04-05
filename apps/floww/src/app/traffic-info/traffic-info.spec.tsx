import { render } from '@testing-library/react';

import TrafficInfo from './traffic-info';

describe('TrafficInfo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TrafficInfo info={{ data: {
      statSubtitle:"Traffic",
      statTitle: "350,897",
      statArrow: "up",
      statPercent: "3.48",
      statPercentColor: "text-emerald-500",
      statDescription: "Since last month",
      statIconName: "far fa-chart-bar",
      statIconColor: "bg-green-500",
    }}} onReload={ () => {}}/>);
    expect(baseElement).toBeTruthy();
  });
});
