import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente <PokemonDetails.js />', () => {
  it('Teste se as informações detalhadas do Pokémon selecionado são mostradas na tela', () => {
    renderWithRouter(<App />);
    const moreDetailsPoke = screen.getByRole('link', { name: /more details/i });
    userEvent.click(moreDetailsPoke);
    const pageDetailsPoke = screen.getByRole('heading', { name: /pikachu details/i });
    expect(pageDetailsPoke).toBeInTheDocument();
  });

  it('Não deve existir o link de navegação para os detalhes do Pokémon selecionado', () => {
    renderWithRouter(<App />);
    const moreDetailsPoke = screen.getByRole('link', { name: /more details/i });
    userEvent.click(moreDetailsPoke);
    const hideLinkNavegation = screen.queryByRole('link', { name: /more details/i });
    expect(hideLinkNavegation).not.toBeInTheDocument();
  });

  it('A seção de detalhes deve conter um heading h2 com o texto Summary', () => {
    renderWithRouter(<App />);
    const moreDetailsPoke = screen.getByRole('link', { name: /more details/i });
    userEvent.click(moreDetailsPoke);
    const pokeSumary = screen.getByRole('heading', { name: /summary/i, level: 2 });
    expect(pokeSumary).toBeInTheDocument();
  });

  it('A seção de detalhes deve conter um parágrafo com o resumo do Pokémon específico sendo visualizado', () => {
    renderWithRouter(<App />);
    const moreDetailsPoke = screen.getByRole('link', { name: /more details/i });
    userEvent.click(moreDetailsPoke);
    const paragraph = screen.getByText(/This intelligent Pokémon roasts hard berries with electricity to make them tender enough to eat/i);
    expect(paragraph).toBeInTheDocument();
  });
  // Fim do topico 1

  it('Testa se existe na página uma seção com os mapas contendo as localizações do Pokémon', () => {
    renderWithRouter(<App />);
    const moreDetailsPoke = screen.getByRole('link', { name: /more details/i });
    userEvent.click(moreDetailsPoke);
    const locationPikachu = screen.getByRole('heading', { name: /game locations of pikachu/i });
    expect(locationPikachu).toBeInTheDocument();
    userEvent.click(moreDetailsPoke);
    // Fim do topico 2.1
    const locationPikachuOne = screen.getByText(/kanto viridian forest/i);
    const locationPikachuTwo = screen.getByText(/kanto power plant/i);
    expect(locationPikachuOne).toBeInTheDocument();
    expect(locationPikachuTwo).toBeInTheDocument();
    // Fim do topico 2.2
    userEvent.click(moreDetailsPoke);
    const imagePokemon = screen.getAllByRole('img', { name: /pikachu location/i });
    expect(imagePokemon).toHaveLength(2);
    // Fim do topico 2.3
    userEvent.click(moreDetailsPoke);
    const srcImage = screen.getAllByRole('img');
    expect(srcImage[1]).toHaveAttribute('src', 'https://archives.bulbagarden.net/media/upload/0/08/Kanto_Route_2_Map.png');
    expect(srcImage[2]).toHaveAttribute('src', 'https://archives.bulbagarden.net/media/upload/b/bd/Kanto_Celadon_City_Map.png');
    // Fim do topico 2.4
    userEvent.click(moreDetailsPoke);
    const altLocation = screen.getAllByAltText(/pikachu location/i);
    expect(altLocation).toHaveLength(2);
  });
  // Fim do topico 2

  it('Testa se o usuário pode favoritar um Pokémon através da página de detalhes', () => {
    renderWithRouter(<App />);
    const moreDetailsPoke = screen.getByRole('link', { name: /more details/i });
    userEvent.click(moreDetailsPoke);
    const checkboxFavoritePokemon = screen.getByRole('checkbox', { name: /pokémon favoritado?/i });
    expect(checkboxFavoritePokemon).toBeInTheDocument();
    // Fim do topico 3.1
    userEvent.click(moreDetailsPoke);
    const alternateClicks = screen.getByRole('checkbox', { name: /pokémon favoritado?/i });
    userEvent.click(alternateClicks);
    // Fim do topico 3.2
    const firstClick = screen.getByAltText(/pikachu is marked as favorite/i);
    expect(firstClick).toBeInTheDocument();
    userEvent.click(alternateClicks);
    // Fim do topico 3.3
    const secondClick = screen.queryByAltText(/pikachu is marked as favorite/i);
    expect(secondClick).not.toBeInTheDocument();
  });
  // Fim do topico 3
});

/*
 * Tentar simplificar? Dividir os testes em subtopicos?
 * Dividir testes por subTopico
 * topico 1: Teste se as informações detalhadas do Pokémon selecionado são mostradas na tela
 * Sub topico 1.1: A página deve conter um texto <name> Details, onde <name> é o nome do Pokémon;
 * Sub topico 1.2: Não deve existir o link de navegação para os detalhes do Pokémon selecionado;
 * Fazer o mesmo para todos topicos
*/
