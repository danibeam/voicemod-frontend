import Filter from 'components/Filter';
import Search from 'components/Search';
import Shuffle from 'components/Shuffle';
import Sort from 'components/Sort';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Header from './index';

configure({ adapter: new Adapter() });

describe('<Filter />', () => {
  const onSelectFilterMock = jest.fn();
  let component;

  beforeEach(() => {
    component = shallow(<Header onSelectFilter={onSelectFilterMock} />);
  });

  it('should render the <Header /> component with the nested components', () => {
    expect(component.find(Search)).toHaveLength(1);
    expect(component.find(Filter)).toHaveLength(1);
    expect(component.find(Sort)).toHaveLength(1);
    expect(component.find(Shuffle)).toHaveLength(1);
  });
});
