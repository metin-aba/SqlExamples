import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Emoji Search/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders emoji list', () => {
  render(<App />);
  const emojiList = screen.getAllByTestId('emoji-item');
  expect(emojiList).toHaveLength(20);
});

test('filters emoji list', () => {
  render(<App />);
  const filterInput = screen.getByPlaceholderText('Search emoji...');
  fireEvent.change(filterInput, { target: { value: 'heart' } });
  const emojiList = screen.getAllByTestId('emoji-item');
  expect(emojiList).toHaveLength(2);
});

test('copies emoji when clicked', () => {
  render(<App />);
  const emojiToCopy = screen.getByTestId('emoji-item-0');
  const clipboardCopy = jest.spyOn(navigator.clipboard, 'writeText');
  fireEvent.click(emojiToCopy);
  expect(clipboardCopy).toHaveBeenCalledWith('😀');
});
