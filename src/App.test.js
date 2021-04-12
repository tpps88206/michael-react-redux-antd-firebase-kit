import React from 'react';

import { render } from '@testing-library/react';

import App from '@/App';

describe('test APP', () => {
  it('renders APP without crashing', () => {
    const div = document.createElement('div');
    render(<App />, div);
  });
});
