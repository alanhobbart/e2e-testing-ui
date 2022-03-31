import { render } from '@testing-library/react';

import Stats from './stats';

jest.mock("@test/ui", () => ({
  MapView: () => {
    const MockName = "MapView";
    return <div />;
  },
}));

describe('Stats', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Stats />);
    expect(baseElement).toBeTruthy();
  });
});
