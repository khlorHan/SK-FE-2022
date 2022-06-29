import { render, screen } from '@testing-library/react';
import App from './App';

test('App 컴포넌트의 로고는 대체 텍스트를 올바르게 작성되어 있는가?', () => {
  render(<App />);
  const logo = screen.getByTestId('logo');
  expect(logo.getAttribute('alt')).toMatch(/react/i);
});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
