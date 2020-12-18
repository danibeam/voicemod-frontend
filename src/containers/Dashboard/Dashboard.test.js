import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Dashboard from './index';

configure({ adapter: new Adapter() });

const mockStore = configureStore();
const store = mockStore();

describe('<Filter />', () => {
  const onClickedVoiceMock = jest.fn();
  let component;

  beforeEach(() => {
    component = shallow(
      <Provider store={store}>
        <Dashboard onClickedVoice={onClickedVoiceMock} />
      </Provider>
    );
  });

  it('should render the <Dashboard /> component and be connected with the Redux store', () => {
    expect(component).toMatchSnapshot();
  });
});
