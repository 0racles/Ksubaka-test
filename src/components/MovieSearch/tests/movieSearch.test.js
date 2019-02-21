import { MovieSearch } from '../index';

const props = {
  onKeyPress: (f) => f,
};

describe('Movie Search', () => {
  it('should match snapshot', () => {
    const renderedItem = shallow(<MovieSearch {...props} />);
    expect(renderedItem).toMatchSnapshot();
  });
});
