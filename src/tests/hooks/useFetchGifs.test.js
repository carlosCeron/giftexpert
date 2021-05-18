import {useFetchGifs} from '../../hooks/useFetchGifs';
import {renderHook} from '@testing-library/react-hooks';

describe('Pruebas en useFetchGifs', () => {

  test('debe retornar el estado inicial ',  async() => {
    const category = 'naruto';
    const {result, waitForNextUpdate } = renderHook( () => useFetchGifs(category));
    const { data , loading } = result.current;
    await waitForNextUpdate();
    expect(data.length).toBe(0);
    expect(loading).toBeTruthy();

  });

  test('debe retornar informacion y estar en false el loading', async () => {
    const category = 'naruto';
    const {result, waitForNextUpdate } = renderHook( () => useFetchGifs(category));
    await waitForNextUpdate();
    const { data , loading } = result.current;
    expect(data.length).toBe(10);
    expect(loading).toBeFalsy();
  });

});