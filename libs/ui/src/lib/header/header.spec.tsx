import { render } from '@testing-library/react';

import Header from './header';

describe('Header', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Header title="Dashboard"  backgroundColor="bg-cyan-600"/>);
    expect(baseElement).toBeTruthy();
    expect(baseElement).toMatchSnapshot();
  });
});
