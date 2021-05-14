import React from 'react';
import { shallow } from 'enzyme';
import CategoryAdd from '../../components/CategoryAdd';


describe('Pruebas en CategoryAdd', () => {

  const setCategorias = jest.fn();
  let wrapper;

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<CategoryAdd setCategorias={setCategorias} />);
  });

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

  test('should not send information when submnit button triggered', () => {
    wrapper.find('form').simulate('submit', {preventDefault(){}});
    expect(setCategorias).not.toHaveBeenCalled();
  });

  test('should call setCategories and clean the text box', () => {
    wrapper.find('input').simulate('change', {
      target: {
        value: 'Hola Mundo'
      }
    });
    wrapper.find('form').simulate('submit', {preventDefault(){}});

    expect(setCategorias).toHaveBeenCalled();
    expect(wrapper.find('input').prop('value')).toBe('');

  });
  
  
  

});