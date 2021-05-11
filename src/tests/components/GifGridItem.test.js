import React from 'react';
import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";


describe('Pruebas en GifGridItem', () => {

  let wrapper
  let img

  beforeEach(() => {
    
    img = {
      id: "1",
      title: "Test Component",
      url: "http://url.com/"
    }

    wrapper = shallow(<GifGridItem  {...img} />);

  });

  test('debe demostrar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe contener un parrafo con el titulo pasado', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(img.title);
  });

  test('debe contener un src y un alt', () => {

    const {src, alt} = wrapper.find('img').props();
    expect(src).toBe(img.url);
    expect(alt).toBe(img.title);
  });

  test('should div has the animated class', () => {
    const div = wrapper.find('div');
    const {className} = div.props();
    expect(className.includes('card')).toBe(true);
  });
  

});