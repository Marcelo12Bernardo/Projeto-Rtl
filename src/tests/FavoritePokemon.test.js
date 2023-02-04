import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FavortiePokemon from '../pages/FavoritePokemon';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente <FavoritePokemon.js />', () => {
  it('Testa se é exibida na tela a mensagem No favorite pokemon found, caso a pessoa não tenha Pokémon favoritos', () => {
    renderWithRouter(<FavortiePokemon />);
    const noFavPokemon = screen.getByText(/No favorite Pokémon found/i);
    expect(noFavPokemon).toBeInTheDocument();
  });

  it('Testa se apenas são exibidos os Pokémon favoritados.', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', { name: /more details/i });
    expect(moreDetails).toBeInTheDocument();
    userEvent.click(moreDetails);
    const favPoke = screen.getByText(/pokémon favoritado\?/i);
    expect(favPoke).toBeInTheDocument();
    userEvent.click(favPoke);
    const pokeFav = screen.getByRole('link', { name: /favorite pokémon/i });
    expect(pokeFav).toBeInTheDocument();
    userEvent.click(pokeFav);
    const pikPoke = screen.getByRole('img', { name: /pikachu is marked as favorite/i });
    expect(pikPoke).toBeInTheDocument();
  });
});
