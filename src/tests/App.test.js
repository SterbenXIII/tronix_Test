import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import { fetchServices } from '../api/api';

jest.mock('../api/api');

describe('App', () => {
  beforeEach(() => {
    fetchServices.mockResolvedValue([
      {
        id: 1,
        name: 'Фотографія',
        description: 'Опис фотографії',
        price: '1300 грн',
        category: 'Фотографія',
      },
      {
        id: 2,
        name: 'Відео',
        description: 'Опис відео',
        price: '1900 грн',
        category: 'Відео',
      },
    ]);
  });

  test('renders loading indicator while fetching services', () => {
    render(<App />);

    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  test('renders service cards after fetching', async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
    });

    expect(await screen.findByText('Фотографія')).toBeInTheDocument();
    expect(await screen.findByText('Відео')).toBeInTheDocument();
  });
});
