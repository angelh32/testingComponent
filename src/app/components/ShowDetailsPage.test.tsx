import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ShowDetailsPage, {
  ShowDetailsPageProps,
} from './ShowDetailsPage'
import thunk from 'redux-thunk';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'
import { Episode } from '../types/types';
const middlewares = [thunk]
const mockStore = configureStore(middlewares)

function Promisedresponse(data){
  return new Promise((resolve, _reject)=>{
    return resolve(data)
  })
}

const mockepisode: Episode[] = [
  {
    id: 1,
    url: 'example',
    name: 'test',
    season: 1,
    number: 1,
    airdate: 'da',
    image: '',
    summary: 'An episode',
  },
];

jest.mock('../redux/actions/ApiCall', () => {
  const actual = jest.requireActual('../redux/actions/ApiCall');
  return {
    ...actual,
    callApiEpisodeList: () => Promisedresponse(mockepisode),
    callApiShow: () => Promisedresponse({}),
    callApiEpisodeInfo: () => Promisedresponse({})
  };
});

describe('<ShowDetailsPageProps />', () => {
  const store = mockStore({
      CurrentShowReducer: {
        episodes: mockepisode
      },
  });
  function renderLoginForm(
    props: Partial<ShowDetailsPageProps> = {},
  ) {
    const defaultProps: ShowDetailsPageProps = {
      show: {},
      match: { params: { id: 12 } },
    };
    
    return render(
      <Provider store={store}>
        <ShowDetailsPage {...defaultProps} {...props} />
      </Provider>
    );
  }


  test('should display', async () => {
    const { queryAllByText } = renderLoginForm();
    expect(queryAllByText("S01E01 test")[0]).toHaveTextContent("S01E01 test")
  });
});
