import { Home } from '../index';

const Props = {
  titles: (f) => f,
  showTitle: (f) => f,
  selectedTitle: (f) => f,
  items: [],
};

describe('Home', () => {
  it('should match snapshot', () => {
    return new Promise(resolve => setTimeout(resolve, 4000))
    const renderedItem = shallow(<Home {...Props} />);
    expect(renderedItem).toMatchSnapshot();
  });
});
