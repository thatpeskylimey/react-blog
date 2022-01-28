import { render, screen } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';

test('renders titlew', () => {
  render(<App />);
  const linkElement = screen.getByText(/Dojo Blog/i);
  expect(linkElement).toBeInTheDocument();
});
