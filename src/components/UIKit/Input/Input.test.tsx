import { render } from '@testing-library/react';
import Input from './Input';

describe('<Input />', () => {
  it('should render without crashing', () => {
    render(<Input />);
  });
});
