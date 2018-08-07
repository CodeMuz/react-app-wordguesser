/**
 * @File   : man.js
 * @Author :  ()
 * @Link   : 
 * @Date   : 8/7/2018, 11:39:15 PM
 */
import React from 'react';
import Man from '../man';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

it('renders without crashing', () => {  
  const mounted = mount(<Man/>);
  expect(toJson(mounted)).toMatchSnapshot();  
});

