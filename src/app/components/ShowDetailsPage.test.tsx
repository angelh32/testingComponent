import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ShowDetailsPage, {
  ShowDetailsPageProps,
} from './ShowDetailsPage';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

/**
 * @jest-environment jsdom
 */

describe('<LoginForm />', () => {
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
    const { findByTestId } = renderLoginForm();

    // ???
  });
});
