import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Page from './page';

describe('Page', () => {
  it('renders the BarChart component', () => {
    render(<Page />);
    const canvas = screen.getByTestId('pie-chart-canvas');
    expect(canvas).toBeInTheDocument();
  });
});
