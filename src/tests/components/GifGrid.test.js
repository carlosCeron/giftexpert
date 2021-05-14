import React from 'react';
import { shallow } from "enzyme";
import GifGrid from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

const categoryName = 'Naruto';

describe('Testtin GifGrid Component', () => {


  test('should component has a snapshot', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    });
    const wrapper = shallow(<GifGrid  category={categoryName} />);
    expect(wrapper).toMatchSnapshot()
  });


  test('should content after hook was called', () => {
    

    const gifs = [
      {
        id: '1',
        title: 'mi title',
        url: 'http://url.com'
      }
    ]

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    });

    const wrapper = shallow(<GifGrid  category={categoryName} />);
    expect(wrapper).toMatchSnapshot();
    expect ( wrapper.find('h4').exists()).toBe(false);
    expect ( wrapper.find('GifGridItem').length ).toBe(gifs.length);

  })
  


});