import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Search from './index';

configure({ adapter: new Adapter() });

const mockStore = configureStore();
const store = mockStore();

describe('<Filter />', () => {
  const onTypeValueMock = jest.fn();
  let component;

  beforeEach(() => {
    component = shallow(
      <Provider store={store}>
        <Search onSelectFilter={onTypeValueMock} />
      </Provider>
    );
  });

  it('should render the <Search /> component and be connected with the Redux store', () => {
    expect(component).toMatchSnapshot();
  });
});
