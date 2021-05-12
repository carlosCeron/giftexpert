import { getGifs } from "../../helpers/getGifs";


describe('Pruebas con Getgifs', () => {

  test('debe traer 10 elementos', async () => {
    const gifs = await getGifs('naruto');
    expect(gifs.length).toBe(10);
  });

  test('debe retornar un array vacio si no se pasa categoria', async () => {
    const gifs = await getGifs('');
    expect(gifs.length).toBe(0);
  });

});