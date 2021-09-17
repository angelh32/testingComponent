import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ShowDetailsPage, {
  ShowDetailsPageProps,
} from './ShowDetailsPage';

/**
 * @jest-environment jest-dom
 */
describe('<LoginForm />', () => {
  function renderLoginForm(
    props: Partial<ShowDetailsPageProps> = {},
  ) {
    const defaultProps: ShowDetailsPageProps = {
      show: {},
      match: { params: { id: 12 } },
    };
    return render(<ShowDetailsPage {...defaultProps} {...props} />);
  }

  test('should display', async () => {
    const { findByTestId } = renderLoginForm();

    // ???
  });
});
