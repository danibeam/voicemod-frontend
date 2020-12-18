import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Shuffle from './index';

configure({ adapter: new Adapter() });

const mockStore = configureStore();
const store = mockStore();

describe('<Filter />', () => {
  const onClickedShuffleMock = jest.fn();
  let component;

  beforeEach(() => {
    component = shallow(
      <Provider store={store}>
        <Shuffle onClickedShuffle={onClickedShuffleMock} />
      </Provider>
    );
  });

  it('should render the <Shuffle /> component and be connected with the Redux store', () => {
    expect(component).toMatchSnapshot();
  });
});
