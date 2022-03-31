import { render } from '@testing-library/react';

import Testagain from './testagain';

describe('Testagain', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Testagain />);
    expect(baseElement).toBeTruthy();
  });
});
