import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import ServiceCard from '../components/ServiceCard';

describe('ServiceCard', () => {
  const mockData = {
    name: 'Фотографія',
    price: '1300 грн',
    description: 'Опис фотографії',
  };

  test('renders ServiceCard with correct data', () => {
    render(<ServiceCard {...mockData} />);

    expect(screen.getByText(mockData.name)).toBeInTheDocument();
    expect(screen.getByText(`Ціна від ${mockData.price}`)).toBeInTheDocument();
  });

});
