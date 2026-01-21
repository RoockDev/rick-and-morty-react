import { describe, expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import { RickMortyApp } from './RickMortyApp';
import {screen } from '@testing-library/react';

//Mock del hook que tengo para hacer el test 
vi.mock('./rickmorty/hooks/useCharacters', () => ({
  useCharacters: () => ({
    isLoading: false,
    hasError: null,
    characters: [],
    hasNextPage: false,
    loadNextPage: vi.fn(),
  }),
}));

describe('RickMortyApp', () => {

    //primer test este es para crear el snapshot como en el ejercicio de clase
  test('should render RickMortyApp component', () => {
    const { container } = render(<RickMortyApp />);
    expect(container).toMatchSnapshot();
  });

  //segundo test este para el titulo 
  test('should show the header title', () => {
    render(<RickMortyApp/>);
    expect(screen.getByText('Rick and Morty')).toBeTruthy();
  })

  //tercer test que compruebo que el botón cargas más está disable cuando no hay más páginas de la api
  test('should disable button loadMore when there is no next page' , () => {
    render(<RickMortyApp/>);
    const button = screen.getByRole('button', {name: 'Cargar más'});
    expect(button).toHaveProperty('disabled', true);
  })






});