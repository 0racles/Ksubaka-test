import App from '../app';

describe('App', () => {
  it('renders without crashing', done => {
    setTimeout(done, 4001);
    shallow(<App />);
  });
});
