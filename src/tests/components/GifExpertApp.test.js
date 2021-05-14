import React from 'react';
import { shallow } from "enzyme";
import GifExpertApp from "../../GifExpertApp";


describe('testing GifExpertApp component', () => {


  test('should same snapshot with the component markup', () => {
    
    const wrapper = shallow(<GifExpertApp />);

    expect(wrapper).toMatchSnapshot();

  });

  test('should show a category list', () => {
    const categorias = ['one', 'two'];
    const wrapper = shallow(<GifExpertApp categoriesDef={categorias} />);
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('GifGrid').length).toEqual(categorias.length);
  })
  


});