import { MoviesList } from '../index';

const props = {
  onClick: (f) => f,
  items: [],
};

describe('Movies List', () => {
  it('should match snapshot', () => {
    const renderedItem = shallow(<MoviesList {...props} />);
    expect(renderedItem).toMatchSnapshot();
  });
});
