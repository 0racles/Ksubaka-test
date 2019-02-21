import Header from '../index';

describe('Header', () => {
  it('should match snapshot', () => {
    const renderedItem = shallow(<Header />);
    expect(renderedItem).toMatchSnapshot();
  });
});
