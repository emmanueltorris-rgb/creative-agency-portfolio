import { render, screen, fireEvent } from '@testing-library/react';
import { expect, test } from 'vitest';
import App from './App';

test('renders projects and filters them via search', () => {
  render(<App />);
 
  const firstProject = screen.getByText(/Modern Branding/i);
  expect(firstProject).toBeDefined();

  const searchInput = screen.getByPlaceholderText(/search projects/i);

  fireEvent.change(searchInput, { target: { value: 'Modern' } });

  expect(screen.getByText(/Modern Branding/i)).toBeDefined();
  
  const hiddenProject = screen.queryByText(/Web Platform/i);
  expect(hiddenProject).toBeNull();
});