import { render } from '@testing-library/react';

import BigMap from './big-map';

describe('BigMap', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BigMap />);
    expect(baseElement).toBeTruthy();
  });
});
