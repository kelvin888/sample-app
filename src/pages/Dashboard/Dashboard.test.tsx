import { render } from '@testing-library/react';
import { Dashboard } from './Dashboard';

describe('<Dashboard />', () => {
  it('should render without crashing', () => {
    render(<Dashboard />);
  });
});
