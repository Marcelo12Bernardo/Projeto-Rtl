import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe(' Teste o componente <Pokedex.js />', () => {
  it('Testa se a página contém um heading h2 com o texto Encountered Pokémon', () => {
    renderWithRouter(<App />);
    const textEncountered = screen.getByRole('heading', { level: 2, name: /encountered pokémon/i });
    expect(textEncountered).toBeInTheDocument();
  });

  it('Testa se é exibido o próximo Pokémon da lista quando o botão Próximo Pokémon é clicado', () => {
    renderWithRouter(<App />);

    const btnNext = screen.getByRole('button', { name: /próximo pokémon/i });
    userEvent.click(btnNext);

    const poke1 = screen.getByText(/Charmander/i);
    expect(poke1).toBeInTheDocument();
    userEvent.click(btnNext);

    const poke2 = screen.getByText(/Caterpie/i);
    expect(poke2).toBeInTheDocument();
    userEvent.click(btnNext);

    const poke3 = screen.getByText(/Ekans/i);
    expect(poke3).toBeInTheDocument();
    userEvent.click(btnNext);

    const poke4 = screen.getByText(/Alakazam/i);
    expect(poke4).toBeInTheDocument();
    userEvent.click(btnNext);

    const poke5 = screen.getByText(/Mew/i);
    expect(poke5).toBeInTheDocument();
    userEvent.click(btnNext);

    const poke6 = screen.getByText(/Rapidash/i);
    expect(poke6).toBeInTheDocument();
    userEvent.click(btnNext);

    const poke7 = screen.getByText(/Snorlax/i);
    expect(poke7).toBeInTheDocument();
    userEvent.click(btnNext);

    const poke8 = screen.getByText(/Dragonair/i);
    expect(poke8).toBeInTheDocument();
    userEvent.click(btnNext);

    const poke0 = screen.getByText(/pikachu/i);
    expect(poke0).toBeInTheDocument();
  });

  it('Testa se é mostrado apenas um Pokémon por vez', () => {
    renderWithRouter(<App />);
    const onePoke = screen.getByText(/pikachu/i);
    expect(onePoke).toBeInTheDocument();
  });

  it('Testa se a Pokédex tem os botões de filtro', () => {
    renderWithRouter(<App />);

    const btnFilterType = screen.queryAllByTestId('pokemon-type-button');
    userEvent.click(btnFilterType[1]);

    const pxPokemon = screen.getByText(/charmander/i);
    expect(pxPokemon).toBeInTheDocument();

    const btnFilterType1 = screen.getByRole('button', { name: /Normal/i });
    userEvent.click(btnFilterType1);

    const btnFilterType2 = screen.getByText(/Snorlax/i);
    expect(btnFilterType2).toBeInTheDocument();

    const btnFilterType3 = screen.getByRole('button', { name: /all/i });
    userEvent.click(btnFilterType3);

    const btnRenderPikachu = screen.getByText(/pikachu/i);
    expect(btnRenderPikachu).toBeInTheDocument();
  });
});
