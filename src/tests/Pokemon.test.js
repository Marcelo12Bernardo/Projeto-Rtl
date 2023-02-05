import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testa o componente <Pokemon.js />', () => {
  it('Testa se é renderizado um card com as informações de determinado Pokémon', () => {
    renderWithRouter(<App />);

    const textPokeName = screen.getByText(/Pikachu/i);
    expect(textPokeName).toBeInTheDocument();

    const textPokeWeight = screen.getByText(/Average weight: 6\.0 kg/i);
    expect(textPokeWeight).toBeInTheDocument();

    const textPokeType = screen.getAllByText('Electric');
    expect(textPokeType[1]).toBeInTheDocument();

    const imgPikachu = screen.getByRole('img', { name: /pikachu sprite/i });
    expect(imgPikachu.src).toContain('https://archives.bulbagarden.net/media/upload/b/b2/Spr_5b_025_m.png');
    expect(imgPikachu).toHaveAttribute('src', 'https://archives.bulbagarden.net/media/upload/b/b2/Spr_5b_025_m.png');
    expect(imgPikachu).toBeInTheDocument();
  });

  test('Testa se ao clicar no link de navegação do Pokémon, é feito o redirecionamento da aplicação para a página de detalhes de Pokémon', () => {
    renderWithRouter(<App />);
    const moreDetailsPoke = screen.getByRole('link', { name: /more details/i });
    expect(moreDetailsPoke).toBeInTheDocument();
    userEvent.click(moreDetailsPoke);

    const pageDetailsPoke = screen.getByText(/Pikachu Details/i);
    expect(pageDetailsPoke).toBeInTheDocument();
  });

  test('Testa se existe um ícone de estrela nos Pokémon favoritados', () => {
    renderWithRouter(<App />);
    const genericText = 'Pikachu is marked as favorite';
    const moreDetails = screen.getByRole('link', { name: /more details/i });
    expect(moreDetails).toBeInTheDocument();
    userEvent.click(moreDetails);
    const favPoke = screen.getByLabelText(/Pokémon favoritado?/i);
    expect(favPoke).toBeInTheDocument();
    userEvent.click(favPoke);
    const imgPoke = screen.getByAltText(genericText);
    expect(imgPoke).toBeInTheDocument();
    expect(imgPoke.alt).toBe(genericText);
    expect(imgPoke.src).toBe('http://localhost/star-icon.svg');
  });
});
