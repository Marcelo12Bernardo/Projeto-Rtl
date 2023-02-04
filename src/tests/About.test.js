import { screen, render } from '@testing-library/react';
import About from '../pages/About';

describe('Teste o componente <About.js />', () => {
  it('Testa se a página contém um heading h2 com o texto About Pokédex', () => {
    render(<About />);
    const textAboutPoke = screen.getByRole('heading', { level: 2, name: 'About Pokédex' });
    expect(textAboutPoke).toBeInTheDocument();
  });
  it('Testa se a página contém dois parágrafos com texto sobre a Pokédex', () => {
    render(<About />);
    const textP1 = screen.getByText('This application simulates a Pokédex, a digital encyclopedia containing all Pokémon');
    const textP2 = screen.getByText('One can filter Pokémon by type, and see more details for each one of them');
    expect(textP1).toBeInTheDocument();
    expect(textP2).toBeInTheDocument();
  });
  it('Testa se a página contém a seguinte imagem de uma Pokédex: https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png', () => {
    render(<About />);
    const imgPokedex = screen.getByRole('img');
    expect(imgPokedex.src).toContain('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
    expect(imgPokedex.alt).toBe('Pokédex');
  });
});
