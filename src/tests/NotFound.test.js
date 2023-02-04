import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { NotFound } from '../pages';

describe('Teste o componente <NotFound.js />', () => {
  it('Testa se a página contém um heading h2 com o texto Page requested not found', () => {
    renderWithRouter(<NotFound />);
    const textNotFoud = screen.getByRole('heading', { level: 2, name: /page requested not found/i });
    expect(textNotFoud).toBeInTheDocument();
  });
  it('Testa se a página mostra a imagem ttps://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif', () => {
    renderWithRouter(<NotFound />);
    const imgPoke = screen.getByRole('img');
    expect(imgPoke).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
