import { MovieDetails } from '../index';

const props = {
  items: [],
};

describe('Movie Details', () => {
  it('should match snapshot', () => {
    const renderedItem = shallow(<MovieDetails {...props} />);
    expect(renderedItem).toMatchSnapshot();
  });
});
