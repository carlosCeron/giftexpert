import React from 'react';
import { shallow } from 'enzyme';
import CategoryAdd from '../../components/CategoryAdd';


describe('Pruebas en CategoryAdd', () => {

  const setCategories = () => {};
  const wrapper = shallow(<CategoryAdd setCategorias={setCategories} />);

  test('debe crear el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();

  });

  test('should test the input change', () => {
    const input = wrapper.find('input');
    input.simulate('change', {
      target: {
        value: 'Hola Mundo'
      }
    });
  });
  

});