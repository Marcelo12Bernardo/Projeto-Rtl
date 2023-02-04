import { screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente <App.js />', () => {
  it('Testa se o topo da aplicação contém um conjunto fixo de links de navegação', () => {
    renderWithRouter(<App />);
    const homeLink = screen.getByRole('link', { name: /home/i });
    const aboutLink = screen.getByRole('link', { name: /about/i });
    const favPokemonLink = screen.getByRole('link', { name: /favorite pokémon/i });
    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(favPokemonLink).toBeInTheDocument();
  });

  it('Testa se a aplicação é redirecionada para a página inicial, na URL / ao clicar no link Home da barra de navegação', () => {
    renderWithRouter(<App />);
    const homeLink = screen.getByRole('link', { name: /home/i });
    userEvent.click(homeLink);
    expect(homeLink).toBeInTheDocument();
  });

  it('Testa se a aplicação é redirecionada para a página de About, na URL /about, ao clicar no link About da barra de navegaçã', () => {
    renderWithRouter(<App />);
    const aboutLink = screen.getByRole('link', { name: /about/i });
    userEvent.click(aboutLink);
    expect(aboutLink).toBeInTheDocument();
  });

  it('Testa se a aplicação é redirecionada para a página de Pokémon Favoritados, na URL /favorites, ao clicar no link Favorite Pokémon da barra de navegação', () => {
    renderWithRouter(<App />);
    const favPokemonLink = screen.getByRole('link', { name: /favorite pokémon/i });
    userEvent.click(favPokemonLink);
    expect(favPokemonLink).toBeInTheDocument();
  });

  it('Testa se a aplicação é redirecionada para a página Not Found ao entrar em uma URL desconhecida.', () => {
    const { history } = renderWithRouter(<App />);
    act(() => {
      history.push('/essaurleinvalidaein');
    });
    const notFound = screen.getByRole('heading', { level: 2, name: /Page requested not found/i });
    expect(notFound).toBeInTheDocument();
  });
});
